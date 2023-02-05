import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import ConfettiExplosion from "react-confetti-explosion";
import Swal from "sweetalert2";

import words from "../words.js";
import Nav from "../common/NavBar.jsx";
import WordCard from "../common/WordCard.jsx";
import ActionCard from "../common/ActionCard.jsx";
import GameManager from "../logique/game.js";

const Game = ({ letters }) => {
  const [isExploding, setIsExploding] = React.useState(false);
  const [word, setWord] = React.useState({});
  const [orignalWord, setOrignalWord] = React.useState({});
  const [actions, setActions] = React.useState([]);
  const [selectedLetter, setSelectedLetter] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  const [score, setScore] = React.useState(0);
  const [selectedDifficulty, setSelectedDifficulty] = React.useState(undefined);

  useEffect(() => {
    if (selectedDifficulty !== undefined) newWord();
  }, [selectedDifficulty]);

  const newWord = () => {
    while (1) {
      let word = words[Math.floor(Math.random() * words.length)];
      const wordQuestion = GameManager.getGroupedByDifficulty(
        word.answer,
        selectedDifficulty,
        1
      )[0];
      if (wordQuestion === undefined) continue;
      word.question = wordQuestion.word;
      word.difficulty = wordQuestion.difficulty;
      setWord(word);
      setOrignalWord(word);
      resetScore();
      break;
    }
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
      localStorage.setItem(
        "scores",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("scores") || "[]"),
          {
            score: (word.difficulty / score ) * 100,
            date: new Date().toLocaleDateString(),
          },
        ])
      );
      setIsExploding(true);
      Swal.fire({
        title: "Good job!",
        text: `Congratulations you found the root word in ${score} moves! Best score is ${
          word.difficulty
            ? (word.difficulty /
                Math.max(
                  score,
                  Math.max(localStorage.getItem("bestScore")) || 0
                )) *
              100
            : "100"
        } %`,
        icon: "success",
        confirmButtonText: "Play Again",
        denyButtonText: "Main Menu",
        showDenyButton: true,
      }).then((result) => {
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
    const graph = GameManager.getGameGraph("../../data.csv");
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
            {JSON.stringify(word)}
          </div>
          <div className="box">
            <div className="content">
              <h1>Description</h1>
              <div className="columns is-centered is-8">
                <div className="column is-4 is-right">
                  {word["description"]}
                </div>
                <div className="column is-4 is-left">
                  <img
                    src={word["image"]}
                    alt="word"
                    style={{ maxHeight: "200px", minHeight: "200px" }}
                  />
                </div>
              </div>
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
      {selectedDifficulty !== undefined ? (
        renderPage()
      ) : (
        <DifficultyMenu setSelectedDifficulty={setSelectedDifficulty} />
      )}
    </div>
  );
};

function DifficultyMenu(props) {
  const difficultyMap = {
    ገማች: 0,
    ለማጅ: 1,
    አዋቂ: 2,
    ብልህ: 3,
    ሞኝ: 4,
  };
  return (
    <div className="box">
      <h1 className="title">Select Difficulty</h1>

      <div className="buttons is-centered">
        {Object.keys(difficultyMap).map((difficulty, index) => {
          return (
            <button
              key={index}
              className="button is-primary full-width"
              onClick={() => {
                props.setSelectedDifficulty(index);
              }}
            >
              {difficulty}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Game;
