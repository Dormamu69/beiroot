import React from 'react';

const WordCard = ({letter,handleClick,id,selectedLetter,selectedIndex}) => {
    const isSelected = selectedLetter === letter && selectedIndex === id;
    return ( <div
        className="box m-2 "
        style={{ width: "5em", height: "5em", padding: "auto",cursor:'pointer',border:isSelected?"3px #00d1b2 solid":"",boxShadow:isSelected?"5px 5px 11px 0px #81928f":"" }}
        onClick={() => {
          handleClick();
        }}
      >
        <div className="column is-centered">
          <h1>{letter}</h1>
        </div>
      </div> );
}
 
export default WordCard;