const Garph = require('./graph').Graph;
const Vertix = require('./graph').Vertex;
const Egde = require('./graph').Edge;

describe('Graph test', () => {
    const graph = new Garph();

    let one = new Vertix(1);
    let two = new Vertix(2);
    let three = new Vertix(3);
    let four = new Vertix(4);
    // let five = new Vertix(5);
    // let six = new Vertix(6);

    graph.addNode(one);
    graph.addNode(two);
    graph.addNode(three);
    graph.addNode(four);


    graph.addEdge(one, two);
    graph.addEdge(one, three);
    graph.addEdge(two, four);
    graph.addEdge(two, three);
    graph.addEdge(three, four);

    console.log('graph', graph);
    graph.printAll();



    it('add vertex', () => {

        expect(graph.addNode(one).value).toEqual(1);

    })

    it('add edge', () => {

        let edge = graph.addEdge(one, three);
        expect(edge.vertex).toBe(three);

    })
    it('get neighbors', () => {

        let neighbors = graph.getNeighbors(one);
        expect(neighbors).toBeDefined();
        console.log('neighbors', neighbors[0]);
        expect(neighbors[0].vertex).toEqual(three);

    })

    it('get size', () => {

        let size = graph.getSize();
        expect(size).toBeDefined();
        expect(size).toBe(4);



    })

    it('get node', () => {

        let nodes = graph.getNodes();
        expect(nodes).toBeDefined();
        for (const [vertex] of nodes) {
            expect(vertex).toHaveProperty('value');//to check if the matrix vertev have property 'value'
        }



    })



})

