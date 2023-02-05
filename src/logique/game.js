import Graph from "./graph.js";
import path from "path";
import fs from "fs";

function getGameGraph(filepath) {
  var graph = new Graph();
  var data = fs.readFileSync(filepath, "utf8");

  var lines = data.split("\r\n");
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    var values = line.replace(" ", "").split(",");
    var letter = values[0];
    graph.addNode(letter);
    const [r_90, r_180, r_270, flip_h, flip_v] = values.slice(1, 6);
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
        graph.addEdge(letter, add_line[j], "add_line");
      }
    }
  }

  return graph;
}

export default {
  getGameGraph,
};
