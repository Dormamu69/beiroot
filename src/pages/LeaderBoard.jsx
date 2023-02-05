import React from "react";
import Nav from "../common/NavBar";

const LeaderBoard = () => {
  const scores = (JSON.parse(localStorage.getItem("scores")) || [])
    .sort((a, b) => a.score - b.score)
    .reverse()
    .slice(0, 10);

  return (
    <h1>
      <Nav home={true}/>
      LeaderBoard
      <h2>Wieners</h2>
      <table className="table full-width is-centered" style={{ width: "100%" }}>
        <tr >
          <th style={{textAlign: "center"}}>Rank</th>
          <th style={{textAlign: "center"}}>Score</th>
          <th style={{textAlign: "center"}}>When</th>
        </tr>
        {scores.map((score, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{score.score}</td>
              <td>{new Date(score.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</td>
            </tr>
          );
        })}
      </table>
    </h1>
  );
};

export default LeaderBoard;
