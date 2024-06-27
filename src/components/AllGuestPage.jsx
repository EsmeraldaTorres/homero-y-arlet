import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./invitacion.css";

const AllGuestPage = () => {
  const [arrayPeople, setArrayPeople] = useState([]);
  const [alPeople, setAlPeople] = useState([]);

  const [confirmedPeople, setConfirmedPeople] = useState([]);
  const [noConfirmados, setNoConfirmados] = useState([]);
  const [noAsistiran, setNoasistiran] = useState([]);
  const [etiqueta, setEtiqueta] = useState("todos");

  const [menu, setMenu] = useState("todos");

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "people"));
      const people = [];
      querySnapshot.forEach((doc) => {
        const data = JSON.parse(JSON.stringify(doc.data(), null, 2));
        people.push(data);
      });
      const groups = people?.map((gruop) => gruop.acompanist);

      let allPeople = [];
      const sacar = groups?.forEach((gruop) => {
        gruop.map((person) => allPeople.push(person));
      });
      console.log(allPeople, "allPeople");
      allPeople.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });

      let confirmados = allPeople?.filter((person) => person.asist === true);
      let noConfirm = allPeople?.filter((person) => person.asist === null);
      let noAsist = allPeople?.filter((person) => person.asist === false);

      setArrayPeople(allPeople);
      setConfirmedPeople(confirmados);
      setNoasistiran(noAsist);
      setNoConfirmados(noConfirm);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleFilter = (value) => {
    setMenu(value);
  };

  // const handleFilterEtiqueta = (value) => {
  //   setEtiqueta(value);
  //   if (menu === "todos") {
  //     const prueba = arrayPeople.filter((person) => person.etiqueta === value);
  //     console.log(prueba, "menu todos", "value ->", value);
  //     setArrayPeople(prueba);
  //   } else if (menu === "confirmados") {
  //     const prueba = confirmedPeople.filter(
  //       (person) => person.etiqueta === value && person.asist === true
  //     );
  //     console.log(prueba, "menu confirmados", "value ->", value);
  //     setConfirmedPeople(prueba);
  //   } else if (menu === "sin confirmar") {
  //     const prueba = noConfirmados.filter(
  //       (person) => person.etiqueta === value && person.asist === null
  //     );
  //     console.log(prueba, "menu sin confirmar", "value ->", value);
  //     setNoConfirmados(prueba);
  //   } else {
  //     const prueba = noAsistiran.filter(
  //       (person) => person.etiqueta === value && person.asist === false
  //     );
  //     console.log(prueba, "menu no asisitra", "value ->", value);

  //     setNoasistiran(prueba);
  //   }
  // };

  useEffect(() => {
    console.log(arrayPeople, "arrayPeople");
    console.log(confirmedPeople, "confirmedPeople");
    console.log(noAsistiran, "noAsistiran");
    console.log(noConfirmados, "noConfirmados");
  }, [etiqueta]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        {menu === "todos" ? (
          <h3>Todos los Invitados {arrayPeople.length}</h3>
        ) : menu === "no asistira" ? (
          <h3>
            Invitados que {menu}n {noAsistiran.length}
          </h3>
        ) : menu === "confirmados" ? (
          <h3>
            Invitados {menu} {confirmedPeople.length}
          </h3>
        ) : (
          <h3>Invitados por confirmar {noConfirmados.length}</h3>
        )}
        <div>
          <span>Filtrar</span>
          <select
            name="filter-guests"
            id=""
            onChange={(event) => {
              event.preventDefault();
              handleFilter(event.target.value);
            }}
          >
            <option value="todos">Todos</option>
            <option value="confirmados">Confirmados</option>
            <option value="no asistira">No asistirá</option>
            <option value="sin confirmar">Sin Confirmar</option>
          </select>
        </div>
        {menu === "todos" ? (
          <>
            <table>
              <thead>
                <tr>
                  <th>Invitado</th>
                  <th>Asistirá</th>
                  <th>Etiqueta</th>
                </tr>
              </thead>
              <tbody>
                {arrayPeople &&
                  arrayPeople.map((person) => (
                    <tr key={person.id}>
                      <td>{person.name}</td>
                      <td>
                        {person.asist
                          ? "confirmado"
                          : person.asist === null
                          ? "sin confirmar"
                          : "No asistirá"}
                      </td>
                      <td>{person.etiqueta}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div>Total: {arrayPeople.length}</div>
            <div>Total confirmardos: {confirmedPeople.length}</div>
            <div>No asisitirán: {noAsistiran.length}</div>
            <div>Faltan por confirmar: {noConfirmados.length}</div>
          </>
        ) : menu === "confirmados" ? (
          <>
            <table>
              <thead>
                <tr>
                  <th>Invitado</th>
                  <th>Asistirá</th>
                  <th>Etiqueta</th>
                </tr>
              </thead>
              <tbody>
                {confirmedPeople &&
                  confirmedPeople.map((person, key) => (
                    <tr key={person.id}>
                      <td>{person.name}</td>
                      <td>{person.asist && "confirmado"}</td>
                      <td>{person.etiqueta}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </>
        ) : menu === "sin confirmar" ? (
          <table>
            <thead>
              <tr>
                <th>Invitado</th>
                <th>Asistirá</th>
                <th>Etiqueta</th>
              </tr>
            </thead>
            <tbody>
              {noConfirmados &&
                noConfirmados.map((person) => (
                  <tr key={person.id}>
                    <td>{person.name}</td>
                    <td>{person.asist === null && "sin confirmar"}</td>
                    <td>{person.etiqueta}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : (
          menu === "no asistira" && (
            <table>
              <thead>
                <tr>
                  <th>Invitado</th>
                  <th>Asistirá</th>
                  <th>Etiqueta</th>
                </tr>
              </thead>
              <tbody>
                {noAsistiran &&
                  noAsistiran.map((person) => (
                    <tr key={person.id}>
                      <td>{person.name}</td>
                      <td>{person.asist === false && "no asistirá"}</td>
                      <td>{person.etiqueta}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )
        )}
      </div>
    </div>
  );
};

export default AllGuestPage;
