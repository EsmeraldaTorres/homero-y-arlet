import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, writeBatch, doc } from "firebase/firestore";

import "./invitacion.css";

const AllGuestPage = () => {
  const [arrayPeople, setArrayPeople] = useState([]);
  const [confirmedPeople, setConfirmedPeople] = useState([]);
  const [noConfirmados, setNoConfirmados] = useState([]);
  const [noAsistiran, setNoasistiran] = useState([]);
  const [addTable, setAddTable] = useState(false);
  const [etiqueta, setEtiqueta] = useState("todos");
  const [menu, setMenu] = useState("todos");
  const [guests, setGuests] = useState([]);
  const mesas = [1, 3, 5];

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "people"));
      const people = [];
      querySnapshot.forEach((doc) => {
        const data = JSON.parse(JSON.stringify(doc.data(), null, 2));
        people.push(data);
      });
      console.log(people, "people");
      setGuests(people);
      const groups = people?.map((gruop) => gruop?.acompanist);
      console.log(groups, "groups");
      let allPeople = [];
      const sacar = groups?.forEach((gruop) => {
        gruop?.map((person) => allPeople.push(person));
      });
      console.log(allPeople, "allPeople");
      allPeople.sort((a, b) => {
        if (a.principalName < b.principalName) {
          return -1;
        }
        if (a.principalName > b.principalName) {
          return 1;
        }
        return 0;
      });

      let confirmados = allPeople?.filter((person) => person?.asist === true);
      let noConfirm = allPeople?.filter((person) => person?.asist === null);
      let noAsist = allPeople?.filter((person) => person?.asist === false);

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

  const handleFilterEtiqueta = (value) => {
    setEtiqueta(value);
  };

  const handleAssignTables = async () => {
    try {
      const batch = writeBatch(db);

      // Actualiza los acompañantes en `guests` con los datos de `confirmedPeople`
      confirmedPeople.forEach((simpleObj) => {
        guests.forEach((nestedObj) => {
          nestedObj.acompanist = nestedObj?.acompanist?.map((acompanistObj) => {
            if (acompanistObj.name === simpleObj.name) {
              // Modifica los valores del objeto que hizo match
              return {
                ...acompanistObj,
              };
            } else {
              return acompanistObj;
            }
          });

          // Prepara la actualización en el batch
          const guestRef = doc(db, "people", nestedObj.id);
          batch.update(guestRef, { acompanist: nestedObj.acompanist });
        });
      });

      // Commit the batch
      await batch.commit();

      console.log("Documentos actualizados correctamente en Firestore.");
    } catch (error) {
      console.error("Error actualizando documentos: ", error);
    }
  };

  const handleTableChange = (index, table) => {
    console.log(index);
    const updatedAccompanist = [...confirmedPeople];
    console.log(updatedAccompanist, "updatedAccompanist");
    updatedAccompanist[index].table = table;
    console.log(updatedAccompanist, "updatedAccompanist");
    setConfirmedPeople(updatedAccompanist);
  };

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
          <span>Filtrar por status</span>
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
        <div>
          <span>Filtrar por etiqueta</span>
          <select
            name="filter-guests"
            id=""
            onChange={(event) => {
              event.preventDefault();
              handleFilterEtiqueta(event.target.value);
            }}
          >
            <option value="todos">Todos</option>
            <option value="novia">Novia</option>
            <option value="novio">Novio</option>
          </select>
        </div>
        {menu === "todos" ? (
          <>
            <table>
              <thead>
                <tr>
                  <th>Familia</th>
                  <th>Invitado</th>
                  <th>Asistirá</th>
                  <th>Etiqueta</th>
                </tr>
              </thead>

              {etiqueta === "todos" ? (
                <tbody>
                  {arrayPeople &&
                    arrayPeople.map((person, key) => (
                      <tr key={key}>
                        <td>{person.principalName}</td>
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
              ) : (
                <tbody>
                  {arrayPeople &&
                    arrayPeople.map(
                      (person) =>
                        person.etiqueta === etiqueta && (
                          <tr key={person.id}>
                            <td>{person.principalName}</td>

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
                        )
                    )}
                </tbody>
              )}
            </table>
            <div>Total de Invitados: {arrayPeople.length}</div>
            <div>Confirmardos: {confirmedPeople.length}</div>
            <div>No asisitirán: {noAsistiran.length}</div>
            <div>Faltan por confirmar: {noConfirmados.length}</div>
          </>
        ) : menu === "confirmados" ? (
          <>
            {etiqueta === "todos" && (
              <>
                {" "}
                <p className="mt-4">
                  Cuando estén listos para organizar a los invitados en mesas,
                  da click en el siguiente botón:
                </p>
                <button
                  onClick={() => {
                    setAddTable(true);
                  }}
                >
                  Agregar mesa
                </button>
              </>
            )}
            <table>
              <thead>
                <tr>
                  <th>Familia</th>
                  <th>Invitado</th>
                  <th>Asistirá</th>
                  <th>Etiqueta</th>
                  {addTable && <th>Mesa</th>}
                </tr>
              </thead>
              {etiqueta === "todos" ? (
                <>
                  <tbody>
                    {confirmedPeople &&
                      confirmedPeople?.map((person, key) => (
                        <>
                          <tr key={key}>
                            <td>{person.principalName}</td>
                            <td>{person.name}</td>
                            <td>{person.asist && "confirmado"}</td>
                            <td>{person.etiqueta}</td>
                            {/* {addTable && ( */}
                            <>
                              <select
                                value={person.table || ""}
                                onChange={(e) =>
                                  handleTableChange(key, e.target.value)
                                }
                              >
                                <option value="">Selecciona mesa...</option>
                                {mesas.map((num) => (
                                  <option
                                    key={num}
                                    value={num}
                                  >{`Mesa ${num}`}</option>
                                ))}
                              </select>
                            </>
                            {/* )} */}
                          </tr>
                        </>
                      ))}
                  </tbody>
                  <button onClick={handleAssignTables}>Asignar Mesas</button>
                </>
              ) : (
                <tbody>
                  {confirmedPeople &&
                    confirmedPeople.map(
                      (person, key) =>
                        person.etiqueta === etiqueta && (
                          <>
                            <tr key={person.id}>
                              <td>{person.principalName}</td>

                              <td>{person.name}</td>
                              <td>{person.asist && "confirmado"}</td>
                              <td>{person.etiqueta}</td>
                            </tr>
                          </>
                        )
                    )}
                </tbody>
              )}
            </table>
          </>
        ) : menu === "sin confirmar" ? (
          <>
            <table>
              <thead>
                <tr>
                  <th>Familia</th>

                  <th>Invitado</th>
                  <th>Asistirá</th>
                  <th>Etiqueta</th>
                </tr>
              </thead>
              {etiqueta === "todos" ? (
                <tbody>
                  {noConfirmados &&
                    noConfirmados.map((person) => (
                      <tr key={person.id}>
                        <td>{person.principalName}</td>

                        <td>{person.name}</td>
                        <td>{person.asist === null && "sin confirmar"}</td>
                        <td>{person.etiqueta}</td>
                      </tr>
                    ))}
                </tbody>
              ) : (
                <tbody>
                  {noConfirmados &&
                    noConfirmados.map(
                      (person) =>
                        person.etiqueta === etiqueta && (
                          <tr key={person.id}>
                            <td>{person.principalName}</td>

                            <td>{person.name}</td>
                            <td>{person.asist === null && "sin confirmar"}</td>
                            <td>{person.etiqueta}</td>
                          </tr>
                        )
                    )}
                </tbody>
              )}
            </table>
          </>
        ) : (
          menu === "no asistira" && (
            <>
              <table>
                <thead>
                  <tr>
                    <th>Familia</th>

                    <th>Invitado</th>
                    <th>Asistirá</th>
                    <th>Etiqueta</th>
                  </tr>
                </thead>
                {etiqueta === "todos" ? (
                  <tbody>
                    {noAsistiran &&
                      noAsistiran.map((person) => (
                        <tr key={person.id}>
                          <td>{person.principalName}</td>

                          <td>{person.name}</td>
                          <td>{person.asist === false && "no asistirá"}</td>
                          <td>{person.etiqueta}</td>
                        </tr>
                      ))}
                  </tbody>
                ) : (
                  <tbody>
                    {noAsistiran &&
                      noAsistiran.map(
                        (person) =>
                          person.etiqueta === etiqueta && (
                            <tr key={person.id}>
                              <td>{person.principalName}</td>

                              <td>{person.name}</td>
                              <td>{person.asist === false && "no asistirá"}</td>
                              <td>{person.etiqueta}</td>
                            </tr>
                          )
                      )}
                  </tbody>
                )}
              </table>
            </>
          )
        )}
      </div>
    </div>
  );
};

export default AllGuestPage;
