import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import ConfettiExplosion from "react-confetti-explosion";
import Swal from "sweetalert2";
import Nav from "../common/NavBar";
import words from "../words";
import WordCard from "../common/WordCard";
import ActionCard from "../common/actionCard";

const Game = ({ letters }) => {
  const [isExploding, setIsExploding] = React.useState(false);
  const [word, setWord] = React.useState({});
  const [orignalWord, setOrignalWord] = React.useState({});
  const [actions, setActions] = React.useState([]);
  const [selectedLetter, setSelectedLetter] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  const [score , setScore] = React.useState(0);


  useEffect(() => {
    newWord();
    console.log(word);
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

    const  handleSubmit = () => {
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
            icon: "e    rror",
            confirmButtonText: "Okey",
          });

      }
    }
    

  const getActions = (letter, index) => {
    setSelectedLetter(letter);
    setSelectedIndex(index);
    // get possible actions for the given letter
    // action = {name: "name", description: "letter", }
    // echo do your magic here
    //generate random actions for testing
    console.log(letter);
    const action_lists = [
      "Rot 90",
      "Rot 180",
      "Rot 270",
      "Flip H",
      "Flip V",
      "Manipulate Letter",
    ];
    const letters = [
      "ሀ",
      "ሁ",
      "ሂ",
      "ሃ",
      "ሄ",
      "ህ",
      "ሆ",
      "ለ",
      "ሉ",
      "ሊ",
      "ላ",
      "ሌ",
      "ል",
      "ሎ",
      "ሐ",
      "ሑ",
      "ሒ",
      "ሓ",
      "ሔ",
      "ሕ",
      "ሖ",
      "መ",
      "ሙ",
      "ሚ",
      "ማ",
      "ሜ",
      "ም",
      "ሞ",
      "ሠ",
      "ሡ",
      "ሢ",
      "ሣ",
      "ሤ",
      "ሥ",
      "ሦ",
      "ረ",
      "ሩ",
      "ሪ",
      "ራ",
      "ሬ",
      "ር",
      "ሮ",
      "ሰ",
      "ሱ",
      "ሲ",
      "ሳ",
      "ሴ",
      "ስ",
      "ሶ",
      "ሸ",
      "ሹ",
      "ሺ",
      "ሻ",
      "ሼ",
      "ሽ",
      "ሾ",
      "ቀ",
      "ቁ",
      "ቂ",
      "ቃ",
      "ቄ",
      "ቅ",
      "ቆ",
      "በ",
      "ቡ",
      "ቢ",
      "ባ",
      "ቤ",
      "ብ",
      "ቦ",
      "ቨ",
      "ቩ",
      "ቪ",
      "ቫ",
      "ቬ",
      "ቭ",
      "ቮ",
      "ተ",
      "ቱ",
      "ቲ",
      "ታ",
      "ቴ",
      "ት",
      "ቶ",
      "ቸ",
      "ቹ",
      "ቺ",
      "ቻ",
      "ቼ",
      "ች",
      "ቾ",
      "ኀ",
      "ኁ",
      "ኂ",
      "ኃ",
      "ኄ",
      "ኅ",
      "ኆ",
      "ነ",
      "ኑ",
      "ኒ",
      "ና",
      "ኔ",
      "ን",
      "ኖ",
      "ኘ",
      "ኙ",
      "ኚ",
      "ኛ",
      "ኜ",
      "ኝ",
      "ኞ",
      "አ",
      "ኡ",
      "ኢ",
      "ኣ",
      "ኤ",
      "እ",
      "ኦ",
      "ከ",
      "ኩ",
      "ኪ",
      "ካ",
      "ኬ",
      "ክ",
      "ኮ",
      "ኸ",
      "ኹ",
      "ኺ",
      "ኻ",
      "ኼ",
      "ኽ",
      "ኾ",
      "ወ",
      "ዉ",
      "ዊ",
      "ዋ",
      "ዌ",
      "ው",
      "ዎ",
      "ዐ",
      "ዑ",
      "ዒ",
      "ዓ",
      "ዔ",
      "ዕ",
      "ዖ",
      "ዘ",
      "ዙ",
      "ዚ",
      "ዛ",
      "ዜ",
      "ዝ",
      "ዞ",
      "ዠ",
      "ዡ",
      "ዢ",
      "ዣ",
      "ዤ",
      "ዥ",
      "ዦ",
      "የ",
      "ዩ",
      "ዪ",
      "ያ",
      "ዬ",
      "ይ",
      "ዮ",
      "ደ",
      "ዱ",
      "ዲ",
      "ዳ",
      "ዴ",
      "ድ",
      "ዶ",
      "ጀ",
      "ጁ",
      "ጂ",
      "ጃ",
      "ጄ",
      "ጅ",
      "ጆ",
      "ገ",
      "ጉ",
      "ጊ",
      "ጋ",
      "ጌ",
      "ግ",
      "ጎ",
      "ጠ",
      "ጡ",
      "ጢ",
      "ጣ",
      "ጤ",
      "ጥ",
      "ጦ",
      "ጨ",
      "ጩ",
      "ጪ",
      "ጫ",
      "ጬ",
      "ጭ",
      "ጮ",
      "ጰ",
      "ጱ",
      "ጲ",
      "ጳ",
    ];
    let actions = [];
    for (let i = 0; i < Math.floor(Math.random() * 5); i++) {
      let action = {
        action: action_lists[Math.floor(Math.random() * action_lists.length)],
        letter: letters[Math.floor(Math.random() * letters.length)],
      };
      actions.push(action);
    }
    setActions(actions);
    console.log(actions);
    // //////////////////////////////////////////////////////////
  };
  
  const handleReset = () => {
    setWord(orignalWord);
    resetScore();
  }
  const addScore = () => {
    setScore(score + 1);
    }
    const resetScore = () => {
        setScore(0);
    }


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
                {
                  actions.map((action, index) => {
                    return (
                      <ActionCard
                        key={index}
                        action={action["action"]}
                        letter={action["letter"]}
                        handleClick={() => {
                            replaceLetter(action["letter"], selectedIndex)
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
