import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import ConfettiExplosion from "react-confetti-explosion";
import Swal from "sweetalert2";

import words from "../words";
import Nav from "../common/NavBar";
import WordCard from "../common/WordCard";
import ActionCard from "../common/actionCard";
import GameManager from "../logique/game";

const Game = ({ letters }) => {
  const [isExploding, setIsExploding] = React.useState(false);
  const [word, setWord] = React.useState({});
  const [orignalWord, setOrignalWord] = React.useState({});
  const [actions, setActions] = React.useState([]);
  const [selectedLetter, setSelectedLetter] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  const [score, setScore] = React.useState(0);

  useEffect(() => {
    newWord();
  }, []);

  const newWord = () => {
    let question = words[Math.floor(Math.random() * words.length)];
    setWord(question);
    setOrignalWord(question);
    resetScore();
  };

  const replaceLetter = (letter, index) => {
    let question = word;
    addScore();
    // replace letter at index
    question = question.question.split("");
    question[index] = letter;
    question = question.join("");
    const newWord = { ...word };
    newWord.question = question;
    setWord(newWord);
    setActions([]);
  };

  const handleSubmit = () => {
    // check if the word is correct
    if (word.question === word.answer) {
      setIsExploding(true);
      Swal.fire({
        title: "Good job!",
        text: `Congratulations you found the root word in ${score} moves!`,
        icon: "success",
        confirmButtonText: "Play Again",
        denyButtonText: "Main Menu",
        showDenyButton: true,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          newWord();
          setIsExploding(false);
        } else if (result.isDenied) {
          window.location.href = "/";
        }
      });
      setTimeout(() => {
        setIsExploding(false);
      }, 4000);
    } else {
      Swal.fire({
        title: "Not correct!",
        text: "That is not the correct word",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  };

  const getActions = (letter, index) => {
    setSelectedLetter(letter);
    setSelectedIndex(index);
    const action_lists = [
      "Rot 90",
      "Rot 180",
      "Rot 270",
      "Flip H",
      "Flip V",
      "Manipulate Letter",
    ];
    const graph = GameManager.getGameGraph('../../data.csv');
    let actions = GameManager.getAllValidMoves(graph, letter);
    setActions(actions);
  };

  const handleReset = () => {
    setWord(orignalWord);
    resetScore();
  };
  const addScore = () => {
    setScore(score + 1);
  };
  const resetScore = () => {
    setScore(0);
  };

  const renderPage = () => {
    if (word["question"]) {
      return (
        <>
          <div className="content">
            <h1>Score: {score}</h1>
          </div>
          <div className="box">
            <div className="content">
              <h1>Description</h1>
              {word["Description"]}
            </div>
          </div>
          <div className="buttons is-centered">
            <button
              className="button is-primary"
              onClick={() => {
                handleSubmit();
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
                newWord();
              }}
            >
              {/* add  fa reload icon */}
              New Word
            </button>
            <button
              className="button is-primary"
              onClick={() => {
                handleReset();
              }}
            >
              {/* add  fa reload icon */}
              <FontAwesomeIcon icon={faRotateRight} />
            </button>
          </div>
          <div className="box">
            <h1>Find The Root Word</h1>
            <div className="columns is-centered">
              {word["question"].split("").map((letter, index) => {
                return (
                  <WordCard
                    key={index}
                    letter={letter}
                    handleClick={() => {
                      getActions(letter, index);
                    }}
                    id={index}
                    selectedLetter={selectedLetter}
                    selectedIndex={selectedIndex}
                  />
                );
              })}
            </div>
          </div>
          {actions && (
            <div className="box">
              <div className="columns">
                {actions.map((action, index) => {
                  return (
                    <ActionCard
                      key={index}
                      action={action["action"]}
                      letter={action["letter"]}
                      handleClick={() => {
                        replaceLetter(action["letter"], selectedIndex);
                      }}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </>
      );
    } else {
      return <h1>loading</h1>;
    }
  };
  return (
    <div className="content">
      {/* <h1>Game</h1> */}
      <Nav home={true} />
      {renderPage()}
    </div>
  );
};

export default Game;
