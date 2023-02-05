import Graph from "./graph.js";
import GRAPH_DATA from "./data";

function getGameGraph() {
  var graph = new Graph();

  var lines = GRAPH_DATA.split("\n");
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    var values = line.replace(" ", "").split(",");
    var letter = values[0];
    graph.addNode(letter);
    const [r_90, r_180, r_270, flip_h, flip_v] = values.slice(1, 6).map((x) => x ? x : "?");
    const sound = values.slice(6, 11);
    const add_line = values.slice(11, 17);
    if (r_90 != "?") {
      graph.addEdge(letter, r_90, "90");
    }
    if (r_180 != "?") {
      graph.addEdge(letter, r_180, "180");
    }
    if (r_270 != "?") {
      graph.addEdge(letter, r_270, "270");
    }
    if (flip_h != "?") {
      graph.addEdge(letter, flip_h, "H");
    }
    if (flip_v != "?") {
      graph.addEdge(letter, flip_v, "V");
    }
    for (var j = 0; j < sound.length; j++) {
      if (sound[j] && sound[j] != "?") {
        graph.addEdge(letter, sound[j], "sound");
      }
    }
    for (var j = 0; j < add_line.length; j++) {
      if (add_line[j] && add_line[j] != "?") {
        graph.addEdge(letter, add_line[j], "line");
      }
    }
  }

  return graph;
}

function getAllValidMoves(graph, letter) {
  var moves = [];
  const letterNeighbours = graph.getGraph()[letter];
  letterNeighbours?.forEach((neighbour) => {
    moves.push({
      letter: neighbour.node,
      type: neighbour.type,
    });
  });
  return moves;
}

export default {
  getGameGraph,
  getAllValidMoves,
};
