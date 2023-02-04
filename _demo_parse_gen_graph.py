from enum import Enum
from pyvis.network import Network

class RelationTypes(Enum):
    R_90 = 1
    R_180 = 2
    R_270 = 4
    FLIP_H = 8
    FLIP_V = 16
    # 25 = 16 + 8 + 1

FILE_NAME = "data.csv"

class Graph:

    def __init__(self, n):
        self.matrix = [
            [0 for i in range(n)]
            for j in range(n)
        ]
        self.nodes_indices = {}
    
    def get_node_index(self, node):
        try:
            return self.nodes_indices[node]
        except KeyError:
            self.nodes_indices[node] = len(self.nodes_indices)
            return self.nodes_indices[node]

    def add_edge(self, node1, node2, relation_type): 
        node1_index = self.get_node_index(node1)
        node2_index = self.get_node_index(node2)

        self.matrix[node1_index][node2_index] += relation_type.value
        self.matrix[node2_index][node1_index] += relation_type.value
        
    def __str__(self):
        return str(self.matrix)

datas = []
with open(FILE_NAME, "r") as file:
    for line in file:
        letter, *rest = line.strip().replace(" ", "").split(",")
        r_90, r_180, r_270, flip_h, flip_v, *rest = rest
        r_90, r_180, r_270, flip_h, flip_v = map(lambda x: False if x=="?" else x, (r_90, r_180, r_270, flip_h, flip_v))

        sound = list(filter(lambda x: x, rest[:5]))
        add_line = list(filter(lambda x: x, rest[5:11]))
        datas.append({ 
            "letter": letter, 
            "r_90": r_90, 
            "r_180": r_180, 
            "r_270": r_270, 
            "flip_h": flip_h, 
            "flip_v": flip_v, 
            "sound": sound, 
            "add_line": add_line
        })

# graph = Graph(len(datas))
# for data in datas:
#     letter = data["letter"]
#     if data["r_90"]:
#         graph.add_edge(letter, data["r_90"], RelationTypes.R_90)
#     if data["r_180"]:
#         graph.add_edge(letter, data["r_180"], RelationTypes.R_180)
#     if data["r_270"]:
#         graph.add_edge(letter, data["r_270"], RelationTypes.R_270)
#     if data["flip_h"]:
#         graph.add_edge(letter, data["flip_h"], RelationTypes.FLIP_H)
#     if data["flip_v"]:
#         graph.add_edge(letter, data["flip_v"], RelationTypes.FLIP_V)

# from pprint import pprint
# pprint(graph)

network = Network(height="800px", width="100%", bgcolor="#222222", font_color="white")

for data in datas:
    letter = data["letter"]
    network.add_node(letter, label=letter)

for data in datas:
    letter = data["letter"]
    network.add_node(letter, label=letter)
    if data["r_90"]:
        network.add_edge(letter, data["r_90"], value="90")
    if data["r_180"]:
        network.add_edge(letter, data["r_180"], value="180")
    if data["r_270"]:
        network.add_edge(letter, data["r_270"], value="270")
    if data["flip_h"]:
        network.add_edge(letter, data["flip_h"], value="H")
    if data["flip_v"]:
        network.add_edge(letter, data["flip_v"], value="V")
    for add_line in data["add_line"]:
        network.add_edge(letter, add_line, value="add_line")
    
network.show("graph.html")


