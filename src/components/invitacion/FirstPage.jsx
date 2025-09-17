import React from "react";
import ReactAudioPlayer from "react-audio-player";
import audioFile from "../../assets/audio/cant-help-falling-in-love-zhannastelmakh.mp3";
import { PlayCircle, PauseCircle, Coin } from "react-bootstrap-icons";
import { useGuest } from "../../Context/GuestContext";

const FirstPage = ({ isPlaying, togglePlayPause, audioRef, hide }) => {
  const { eventData } = useGuest();

  return (
    <>
      <section
        id="inicio"
        className="home d-flex justify-content-center align-items-center"
      >
        <div className="d-flex justify-content-evenly h-100 flex-column">
          <div
            className={`display-4 f-4 text-center font-paris text-white text-shadow2 pl-4 pr-4 mt-4 opacity-0 ${
              hide ? "hide" : "animate__animated animate__zoomIn"
            } `}
          >
            <p
              className={`font-paris text-white display-4 mb-0 
              `}
            >
              Arlet
            </p>
            <p className={`text-white font-paris display-4 mb-0 `}>{"&"}</p>
            Homero
          </div>
          <div
            className={`display-4 f-4 text-center font-paris text-white text-shadow2 pl-4 pr-4 mt-4 `}
          >
            <p className={`font-paris text-white display-4 mb-0 `}>
              {" "}
              {eventData.groom}
            </p>
            <p className={`text-white font-paris display-4 mb-0 `}>{"&"}</p>
            {eventData.bride}
          </div>
        </div>
        <div
          className="text-white text-center player-btn d-flex flex-column"
          id="play"
        >
          {isPlaying ? (
            <PauseCircle
              className={` play-btn player-icon `}
              onClick={togglePlayPause}
            />
          ) : (
            <PlayCircle
              className={`play-btn player-icon `}
              onClick={togglePlayPause}
            />
          )}
          <p className="d-flex font-gold text-audio">
            audio <i class="bi bi-music-note-beamed "></i>
          </p>
        </div>
        <div className="player-audio">
          <ReactAudioPlayer
            ref={audioRef}
            id="audio"
            controls={false}
            loop={true}
            src={audioFile}
          />
        </div>
      </section>
    </>
  );
};

export default FirstPage;
