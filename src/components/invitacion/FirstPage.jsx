import React from "react";
import ReactAudioPlayer from "react-audio-player";
import audioFile from "../../assets/audio/musica-lewis-coffee-at-midnight.mp3";
import { PlayCircle, PauseCircle, Coin } from "react-bootstrap-icons";
import nameImg from "../../assets/img/arturo-y-noemi.png";

const FirstPage = ({ isPlaying, togglePlayPause, audioRef, hide }) => {
  return (
    <>
      <section className="home d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-center">
        <div
            className={`display-4 f-4 text-center font-paris text-white text-shadow2 pl-4 pr-4 mt-4  ${
              hide ? "hide" : "animate__animated animate__zoomIn"
            } `}
          >
            <p className={`font-paris text-white display-4 mb-0 ${!hide && " animate__animated animate__zoomIn"}`}>Arturo</p>
            <p className={`text-white font-paris display-4 mb-0 ${!hide && " animate__animated animate__zoomIn"}`}>{"&"}</p>
            Noemi
          </div>
        </div>
        <div className="text-white text-center player-btn" id="play">
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

          <p>audio</p>
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
