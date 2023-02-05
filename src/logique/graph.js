export default class Graph {
    constructor() {
        this.nodes = [];
        this.graph = {};
    }

    addNode(node) {
        this.nodes.push(node);
        this.graph[node] = [];
    }

    addEdge(node1, node2, type) {
        if(!this.graph[node1]) this.addNode(node1);
        if(!this.graph[node2]) this.addNode(node2);

        this.graph[node1].push({node: node2, type: type});
        this.graph[node2].push({node: node1, type: type});
    }

    getNodes() {
        return this.nodes;
    }

    getGraph() {
        return this.graph;
    }

    toHTML() {
        var html = "";
        for (var i = 0; i < this.nodes.length; i++) {
            var node = this.nodes[i];
            html += node + " -> " + this.graph[node].map(x => `${x.node}(${x.type})`).join(", ") + "\n";
        }
        return html;
    }

}