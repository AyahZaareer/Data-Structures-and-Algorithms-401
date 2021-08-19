class Vertex {
    constructor(value) {
        this.value = value;
    }
}

class Edge {
    constructor(vertex, weight = 0) {
        this.vertex = vertex;
        this.weight = weight;
    }
}

class Graph {
    constructor() {
        this._adjacencyList = new Map();
    }

    addNode(vertex) {
        this._adjacencyList.set(vertex, []);
        return vertex;
    }

    addEdge(startVertex, endVertex) {
        if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
            return ('Invalid Vertex');
        } else {
            const adjacencies = this._adjacencyList.get(startVertex);
            const edge = new Edge(endVertex);
            adjacencies.push(edge);
            return edge;
        }


        // if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
        //     throw new Error('Invalid vertex');
        // }
        // const adjacencies = this._adjacencyList.get(startVertex);
        // adjacencies.push(new Edge(endVertex));
    }
    printAll() {
        for (const [vertex, edge] of this._adjacencyList.entries()) { //we have normal for , in for and of for
            console.log(vertex);
            console.log(edge);

        }

    }
    getNodes() {
        return this._adjacencyList.entries();
    }
    getNeighbors(vertex) {
        if (!this._adjacencyList.has(vertex)) {
            return 'Invalid';
        } else {
            return this._adjacencyList.get(vertex);
        }
    }

    getSize() {
        return this._adjacencyList.size > 0 ? this._adjacencyList.size : null;
    }
}

module.exports = { Graph, Vertex, Edge };