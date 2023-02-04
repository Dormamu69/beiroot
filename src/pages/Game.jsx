import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import ConfettiExplosion from "react-confetti-explosion";
import Swal from "sweetalert2";
import Nav from "../common/NavBar";

const Game = ({ letters }) => {
  const [isExploding, setIsExploding] = React.useState(false);

  return (
    <div className="content">
      {/* <h1>Game</h1> */}
     <Nav/>

      <div className="box">
        <div className="content">
          <h1>Description</h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus,
          voluptate? Repellendus, porro molestias ab eos, architecto sapiente
          magni illo at in aperiam consequuntur harum excepturi alias minima
          totam aspernatur laborum!
        </div>
      </div>
      <div className="buttons is-centered">
        <button
          className="button is-primary"
          onClick={() => {
            if (1 == 1) {
              setIsExploding(true);
              Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
                confirmButtonText: "Cool",
              });
              setTimeout(() => {
                setIsExploding(false);
              }, 4000);
            } else {
            }
          }}
        >
          {/* add  fa check icon */}
          <FontAwesomeIcon icon={faCheck} /> {"\t"}Submit
        </button>
        {isExploding && (
          <ConfettiExplosion
            force={0.6}
            duration={5000}
            particleCount={200}
            height={1600}
            width={1600}
          />
        )}
        <button
          className="button is-primary"
          onClick={() => {
            alert("ola");
          }}
        >
          {/* add  fa reload icon */}
          New Word
        </button>
        <button
          className="button is-primary"
          onClick={() => {
            alert("ola");
          }}
        >
          {/* add  fa reload icon */}
          <FontAwesomeIcon icon={faRotateRight} />
        </button>
      </div>
      <div className="box">
        <h1>Find The Root Word</h1>
        <div className="columns is-centered">
          <div
            className="box m-2 "
            style={{ width: "5em", height: "5em", padding: "auto" }}
            onClick={() => {
              alert("ola");
            }}
          >
            <div className="column is-centered">
              <h1>ሀ</h1>
            </div>
          </div>
          <div
            className="box m-2 "
            style={{ width: "5em", height: "5em", padding: "auto" }}
            onClick={() => {
              alert("ola");
            }}
          >
            <div className="column is-centered">
              <h1>ሃ</h1>
            </div>
          </div>
          <div
            className="box m-2 "
            style={{ width: "5em", height: "5em", padding: "auto" }}
            onClick={() => {
              alert("ola");
            }}
          >
            <div className="column is-centered">
              <h1>ፕ</h1>
            </div>
          </div>
          <div
            className="box m-2 "
            style={{ width: "5em", height: "5em", padding: "auto" }}
            onClick={() => {
              alert("ola");
            }}
          >
            <div className="column is-centered">
              <h1>ክ</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="box">
        <div className="columns">
          <div
            className="box m-2 "
            // style={{ width: "8em", height: "8em", padding: "auto" }}
          >
            <div className="columns is-vcentered">
              <div className="column  is-primary">Rot 90</div>
              <div className="column ">
                <h1>ሃ</h1>
              </div>
            </div>
          </div>
          <div
            className="box m-2 "
            // style={{ width: "8em", height: "8em", padding: "auto" }}
          >
            <div className="columns is-vcentered">
              <div className="column  is-primary">Rot 180</div>
              <div className="column ">
                <h1>ቅ</h1>
              </div>
            </div>
          </div>
          <div
            className="box m-2 "
            // style={{ width: "8em", height: "8em", padding: "auto" }}
          >
            <div className="columns is-vcentered">
              <div className="column  is-primary">Add Line</div>
              <div className="column ">
                <h1>ል</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
