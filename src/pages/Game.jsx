import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRotateRight,
  faCheck,
  faAdd,
} from "@fortawesome/free-solid-svg-icons";
import ConfettiExplosion from "react-confetti-explosion";
import Swal from "sweetalert2";
import ReactGA from "react-ga";

import words from "../words.js";
import Nav from "../common/NavBar.jsx";
import WordCard from "../common/WordCard.jsx";
import ActionCard from "../common/ActionCard.jsx";
import GameManager from "../logique/game.js";
import { DIFFICULTY_GROUPS, DIFFICULTY_MAP } from "../logique/constants.js";

const Game = ({ letters }) => {
  const [isExploding, setIsExploding] = React.useState(false);
  const [word, setWord] = React.useState({});
  const [orignalWord, setOrignalWord] = React.useState({});
  const [actions, setActions] = React.useState([]);
  const [selectedLetter, setSelectedLetter] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  const [moves, setMoves] = React.useState(0);
  const [selectedDifficulty, setSelectedDifficulty] = React.useState(undefined);

  useEffect(() => {
    if (selectedDifficulty !== undefined) {
      newWord();
      ReactGA.event({
        category: "Game",
        action: "Difficulty Selected",
        label: selectedDifficulty,
      });
    }
  }, [selectedDifficulty]);

  useEffect(() => {
    if (isExploding) {
      ReactGA.event({
        category: "Game",
        action: "Word Found",
        label: word.answer,
      });
    }
  }, [isExploding]);

  useEffect(() => {
    if (moves > 0) {
      ReactGA.event({
        category: "Game",
        action: "Move Made",
        label: moves,
      });
    }
  }, [moves]);

  const getRidiculousWords = (words, playerWordsUsed) => {
    const wordsUsedCount = playerWordsUsed.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});
    const adjustedDifficulty = words.map((word) => ({
      ...word,
      maxDifficulty: word.maxDifficulty - (wordsUsedCount[word.answer] || 0),
    }));
    const mostDifficultWord = adjustedDifficulty.reduce((acc, word) => {
      if (word.maxDifficulty > acc.maxDifficulty) {
        return word;
      }
      return acc;
    }, { maxDifficulty: 0 });
    return mostDifficultWord;
  };

  const newWord = () => {
    const playerWordsUsed =
      JSON.parse(localStorage.getItem("playerWordsUsed")) || [];
    const difficultyLowerBound = DIFFICULTY_GROUPS[selectedDifficulty];
    const filteredWords =
      difficultyLowerBound === Infinity
        ? [getRidiculousWords(words, playerWordsUsed)]
        : words.filter((word) => word.maxDifficulty >= difficultyLowerBound);

    if (!filteredWords.length) {
      Swal.fire({
        title: "No more words",
        text: "This probably should not have happened. Please contact the developer.",
        icon: "error",
        confirmButtonText: "Ok",
      }).then(() => window.location.reload());
      return;
    }
    const wordProbabilities = filteredWords.map((word) => {
      const wordUsedCount = playerWordsUsed.filter(
        (playerWord) => playerWord === word.answer
      ).length;
      return 1 / (wordUsedCount + 1);
    });
    const totalProbability = wordProbabilities.reduce((a, b) => a + b, 0);
    const random = Math.random() * totalProbability;
    let potentialWord = filteredWords[0];
    let probabilitySum = wordProbabilities[0];
    for (let i = 1; i < filteredWords.length; i++) {
      if (random < probabilitySum) {
        potentialWord = filteredWords[i];
        break;
      }
      probabilitySum += wordProbabilities[i];
    }

    const wordQuestion = GameManager.getGroupedByDifficulty(
      potentialWord.answer,
      selectedDifficulty,
      1
    )[0];

    if (wordQuestion === undefined) {
      Swal.fire({
        title: "No more words",
        text: "This probably should not have happened. Please contact the developer.",
        icon: "error",
        confirmButtonText: "Ok",
      }).then(() => {
        ReactGA.event({
          category: "Game",
          action: "No More Words",
          label: selectedDifficulty,
        });
        window.location.reload();
      });
      return;
    }
    potentialWord.question = wordQuestion.word;
    potentialWord.difficulty = wordQuestion.difficulty;
    setWord(potentialWord);
    setOrignalWord(potentialWord);
    setActions([]);
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
      localStorage.setItem(
        "scores",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("scores") || "[]"),
          {
            score: (word.difficulty / moves) * 100,
            date: new Date().toLocaleDateString(),
          },
        ])
      );
      localStorage.setItem(
        "playerWordsUsed",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("playerWordsUsed") || "[]"),
          word.answer,
        ])
      );
      setIsExploding(true);
      const score =
        (word.difficulty /
          Math.max(moves, Math.max(localStorage.getItem("bestScore")) || 0)) *
        100;
      Swal.fire({
        title: "Good job!",
        text: `Congratulations you found the root word in ${moves} moves! Your solution was 
         ${
           word.difficulty ? Math.round(score * 100) / 100 : "100"
         }% efficient.`,
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
    setActions([]);
    resetScore();
    ReactGA.event({
      category: "Game",
      action: "Reset",
    });
  };
  const addScore = () => {
    setMoves(moves + 1);
  };
  const resetScore = () => {
    setMoves(0);
  };

  const renderPage = () => {
    if (word["question"]) {
      return (
        <>
          <div className="content" style={{ marginTop: "0px" }}>
            <div className="columns is-centered">
              <div className="column is-5">
                <h5
                  className={
                    moves > word.difficulty
                      ? "title is-5 has-text-danger"
                      : "title is-5 has-text-success"
                  }
                >
                  ሙከራዎች: {moves} / {word.difficulty}
                </h5>
              </div>
              <div className="column is-5">
                <h5 className="title is-5 has-text-primary">
                  ክብደት:{" "}
                  {
                    Object.entries(DIFFICULTY_MAP).find(
                      (entry) => entry[1] === selectedDifficulty
                    )[0]
                  }
                </h5>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="content">
              <h3>ማብራሪያ</h3>
              <div className="columns is-centered is-8">
                <div
                  className="column is-4 is-right has-text-centered"
                  style={{
                    margin: "auto 0",
                  }}
                >
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

          <div className="box">
            {/* <h1>Find The Root Word</h1> */}
            <h3>
              <span className="has-text-grey">የ ቃሉን ስር ይፈልጉ</span>
            </h3>
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
          {actions.length ? (
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
          ) : (
            <div className="box">
              <p className="title is-6 has-text-centered has-text-grey is-italic has-text-weight-light">
                Wow, such empty
              </p>
            </div>
          )}
          <div className="buttons is-centered">
            <button
              className="button is-success"
              onClick={() => {
                handleSubmit();
              }}
            >
              <FontAwesomeIcon icon={faCheck} /> {"\t "} ሙከራ ይፈጽሙ
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
              <FontAwesomeIcon icon={faAdd} /> {"\t "}
              አዲስ ቃል ይጠቀሙ
            </button>
            <button
              className="button is-primary"
              onClick={() => {
                handleReset();
              }}
            >
              <FontAwesomeIcon icon={faRotateRight} />
              እንደገና ይጀምሩ
            </button>
            <button
              className="button is-warning"
              onClick={() => {
                setSelectedDifficulty(undefined);
              }}
            >
              <span role="img" aria-label="emoji">
                😅
              </span>{" "}
              ክብደት ይቀይሩ
            </button>
          </div>
        </>
      );
    } else {
      return <h1>loading</h1>;
    }
  };
  return (
    <div className="content">
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
  return (
    <div className="box">
      <h1 className="title">Select Difficulty</h1>

      <div className="buttons is-centered">
        {Object.keys(DIFFICULTY_MAP).map((difficulty, index) => {
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
