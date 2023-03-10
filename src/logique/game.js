import Graph from "./graph.js";
import GRAPH_DATA from "./data.js";

import { DIFFICULTY_GROUPS } from "./constants.js";

function getGameGraph() {
  var graph = new Graph();

  var lines = GRAPH_DATA.split("\n");
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    var values = line.replace(" ", "").split(",");
    var letter = values[0];
    graph.addNode(letter);
    const [r_90, r_180, r_270, flip_h, flip_v] = values
      .slice(1, 6)
      .map((x) => (x ? x : "?"));
    const sound = values.slice(6, 11);
    const add_line = values.slice(11, 17);
    if (r_90 != "?") {
      graph.addEdge(letter, r_90, "Rot 90");
    }
    if (r_180 != "?") {
      graph.addEdge(letter, r_180, "Rot 180");
    }
    if (r_270 != "?") {
      graph.addEdge(letter, r_270, "Rot 270");
    }
    if (flip_h != "?") {
      graph.addEdge(letter, flip_h, "Flip H");
    }
    if (flip_v != "?") {
      graph.addEdge(letter, flip_v, "Flip V");
    }
    for (var j = 0; j < sound.length; j++) {
      if (sound[j] && sound[j] != "?") {
        graph.addEdge(letter, sound[j], "Sound");
      }
    }
    for (var j = 0; j < add_line.length; j++) {
      if (add_line[j] && add_line[j] != "?") {
        graph.addEdge(letter, add_line[j], "Manipulate Line");
      }
    }
  }

  return graph;
}

function getAllValidMoves(graph, letter) {
  var moves = [];
  const letterNeighbours = graph.getGraph()[letter];
  letterNeighbours.forEach((neighbour) => {
    moves.push({
      letter: neighbour.node,
      action: neighbour.type,
    });
  });
  return moves.reduce((acc, current) => {
    const x = acc.find((item) => item.letter === current.letter);
    if (!x) {
      return acc.concat([current]);
    }
    return acc;
  }, []);
}

function getLetterGroup(graph, letter) {
  const queue = [{ letter, depth: 0 }];
  const visited = new Map();
  while (queue.length > 0) {
    const current = queue.shift();
    if (visited.has(current.letter)) continue;
    visited.set(current.letter, current.depth);
    const letterNeighbours = graph.getGraph()[current.letter];
    letterNeighbours.forEach((neighbour) => {
      queue.push({ letter: neighbour.node, depth: current.depth + 1 });
    });
  }
  return visited;
}

function generateAllPotentialQuestions(graph, word) {
  const letters = word.split("");
  const letterGroups = letters.map((letter) => getLetterGroup(graph, letter));
  const collection = [
    ...Array.from(letterGroups[0].entries()).map((x) => ({
      word: x[0],
      difficulty: x[1],
    })),
  ];

  let collectionSize = collection.length;
  for (var i = 1; i < letterGroups.length; i++) {
    const newCollection = [];
    const step = Math.max(1, Math.floor(collectionSize / 30000));
    for (var j = 0; j < Math.min(collectionSize, 30000); j += step) {
      const current = collection.shift();
      Array.from(letterGroups[i].keys()).forEach((letter) => {
        if (newCollection.length > 100000) return;
        newCollection.push({
          word: current.word + letter,
          difficulty: letterGroups[i].get(letter) + current.difficulty,
        });
      });
    }
    collection.length = 0;
    collection.push(...newCollection);
    collectionSize = collection.length;
  }
  return collection;
}

function getGroupedByDifficulty(word, difficulty, maxSize = 10) {
  const questions = generateAllPotentialQuestions(getGameGraph(), word);
  const lowerBound = DIFFICULTY_GROUPS[difficulty];
  const upperBound = DIFFICULTY_GROUPS[difficulty + 1] || Infinity;
  if (lowerBound === Infinity)
    return questions
      .sort((a, b) => b.difficulty - a.difficulty)
      .slice(0, maxSize);
  return questions
    .filter((x) => x.difficulty >= lowerBound && x.difficulty <= upperBound)
    .slice(0, maxSize);
}

function getMaxDifficulty(word) {
  const questions = generateAllPotentialQuestions(getGameGraph(), word);
  return questions.reduce((acc, current) => {
    return Math.max(acc, current.difficulty);
  }, 0);
}

export default {
  getGameGraph,
  getAllValidMoves,
  generateAllPotentialQuestions,
  getGroupedByDifficulty,
  getMaxDifficulty,
};
