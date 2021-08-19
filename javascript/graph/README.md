# Graph


## A graph is a non-linear data structure that can be looked at as a collection of vertices (or nodes) potentially connected by line segments named edges.

  - **Vertex-** A vertex, also called a “node”, is a data object that can have zero or more adjacent vertices.
  - **Edge -** An edge is a connection between two nodes.
  - **Neighbor -** The neighbors of a node are its adjacent nodes, i.e., are connected via an edge.
  - **Degree -** The degree of a vertex is the number of edges connected to that vertex.



## Methods:
  - **Add node**
     - Arguments: value
     - Returns: The added node
     - Add a node to the graph
     - Big O: time O(1) , space O(n)
  - **add edge**
     - Arguments: 2 nodes to be connected by the edge, weight (optional)
     - Returns: nothing
     - Adds a new edge between two nodes in the graph
     - If specified, assign a weight to the edge
     - Both nodes should already be in the Graph
     - Big O: time O(1) , space O(1)
  - **get nodes**
     - Arguments: none
     - Returns all of the nodes in the graph as a collection (set, list, or similar)
     - Big O: time O(1) , space O(1)
  - **get neighbors**
     - Arguments: node
     - Returns a collection of edges connected to the given node
     - Include the weight of the connection in the returned collection
     - Big O: time O(1) , space O(1)
  - **size**
     - Arguments: none
     - Returns the total number of nodes in the graph
     - Big O: time O(1) , space O(1)





## Approach :

1.Understand the porblem.

2.I try to imagined the ruslte.

3.Writting the code




## Test:
 - npm test
 - npm run watch 