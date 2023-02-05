import React from "react";

const ActionCard = ({handleClick,action,letter}) => {
  return (
    <article className="panel is-primary" style={{minWidth:"100px", margin: "0.5rem",cursor:'pointer' }} onClick={()=>{handleClick();}}>
      <p
        className="panel-heading"
        style={{ fontSize: "12px", lineHeight: "15px" }}
      >
        {action}
      </p>

      <h1 style={{ marginTop: "0px" }}>{letter}</h1>
    </article>
  );
};

export default ActionCard;
