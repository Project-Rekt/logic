//import { Pather } from "./ShortestPath"

//var pathingInstance = require('./ShortestPath.js')
//var p = pathingInstance.Pather
class PathNode{
    constructor(x, y, id){
        this.distance = Number.MAX_SAFE_INTEGER
        this.shortestPath = []
        this.adjacentNodes = []
        this.x = x
        this.y = y
        this.id = id
    }
    setShortestPath(path){
        this.shortestPath = path
    }
    setDistance(distance){
        this.distance = distance
    }
}

class Graph{
    constructor(){
        this.nodes = []
    }

    /*
     * iterates through all nodes in graph
     * resets all pathing information
     * to run another pathing check, run this first
     */
    wipeAllPathData(){
        for(var i = 0; i < this.nodes.length; i++){
            var node = this.nodes[i]
            node.setShortestPath(node)
            node.distance = Number.MAX_SAFE_INTEGER
        }
        
    }
    getNode(x, y){
        for(var i = 0; i < this.nodes.length; i++){
            var node = this.nodes[i]
            if (node.x == x && node.y == y){
                return node;
            }
        }
        return null;
    }
    addNode(node){
        this.nodes.push(node)
    }
}

class Pather{
    constructor(){
        this.graph = null
        this.map = null
        this.endpoints = null
    }

    /*
     * Takes a matrix to create a graph representation made of nodes
     * adjacent values in the matrix can be linked in node form if their values are 1
     * values that are 0 do not link
     */
    initializeGraph(matrix){
        this.graph = this.matrixToGraph(matrix)
        this.graph.wipeAllPathData()
    }

    matrixToGraph(matrix){
        var g = new Graph()
        var nodeMatrix = new Array(matrix.length)
        for (var i = 0; i < matrix.length; i++)
        {
            nodeMatrix[i] = new Array(matrix[0].length)
        }
        for (var i = 0; i < matrix.length; i++)
        {
            for (var j = 0; j < matrix[0].length; j++)
            {
                var val = matrix[i][j]
                if (val == 0 || val == 2)
                {
                    var n = new PathNode(j, i, val)
                    g.addNode(n)
                    nodeMatrix[i][j] = n
                }
            }
        }
        console.log(nodeMatrix.length + " by " + nodeMatrix[0].length)
        
        this.connectAdjacents(nodeMatrix)
        return g
    }

    connectAdjacents(nodeMatrix){
        for (var i = 0; i < nodeMatrix.length; i++)
        {
            for(var j = 0; j < nodeMatrix[0].length; j++)
            {
                var n = nodeMatrix[i][j]
                if(nodeMatrix[i][j] === undefined){
                    continue;
                }
                if (j > 0) //add left neighbor
                {
                    if (!(nodeMatrix[i][j-1] === undefined))
                    {
                        n.adjacentNodes.push([nodeMatrix[i][j-1], 1])
                    }
                }
                if (j < nodeMatrix[0].length - 1) //add right neighbor
                {
                    if (!(nodeMatrix[i][j+1] === undefined))
                    {
                        n.adjacentNodes.push([nodeMatrix[i][j+1], 1])
                    }
                }
                if (i > 0) //add above neighbor
                {
                    if (!(nodeMatrix[i-1][j] === undefined))
                    {
                        n.adjacentNodes.push([nodeMatrix[i-1][j], 1])
                    }
                }
                if (i < nodeMatrix.length - 1) //add below neighbor
                {
                    if (!(nodeMatrix[i+1][j] === undefined))
                    {
                        n.adjacentNodes.push([nodeMatrix[i+1][j], 1])
                    }
                }
            }
        }
    }

    /*
     * given the start and end coordinates, return a list of coordinates in the format [x, y]
     * the order of these coordinates determines the path from start to end
     */
    findShortestPathToEnds(xStart, yStart){
        this.graph.wipeAllPathData()
        var startNode = this.graph.getNode(xStart, yStart)
        this.findShortestPaths(startNode)
        var shortest = this.searchShortestPathToEnds()
        var shortestpath = shortest.shortestPath
        shortestpath.push(shortest)
        var result = this.convertPathToListOfLists(shortestpath)
        return result
    }

    /*
     * searches among the nodes for the endpoint nodes, from there, find the endpoint with the shortest path and return path, null if none are found
     */
    searchShortestPathToEnds(){
        var shortest = null;
        var shortestDistance = Number.MAX_SAFE_INTEGER
        for(var i = 0; i < this.graph.nodes.length; i++){
            var node = this.graph.nodes[i]
            if (node.id == 2 && node.distance < shortestDistance){
                shortest = node;
                shortestDistance = node.distance
            }
        }
        if(shortest == null){
            return null
        }
        return shortest
    }

    convertPathToListOfLists(path){
        var result = []
        for (var i = 0; i < path.length; i++){
            data = path[i]
            var data = [data.x, data.y]
            result.push(data)
        }
        return result;
    }

    /*
     *given a source node, calculate the shortest path to every node that the specified node can reach.
     *
     */
    findShortestPaths(source){
        source.setDistance(0)
        var unsettledNodes = []
        var settledNodes = []

        unsettledNodes.push(source)
        var a = 0
        while(unsettledNodes.length != 0){
            a++
            var currentNode = this.getLowestDistanceNode(unsettledNodes)
            unsettledNodes.splice(unsettledNodes.indexOf(currentNode), 1)
            
            for (var i = 0; i < currentNode.adjacentNodes.length; i++)
            {
                var adjacentNode = currentNode.adjacentNodes[i][0]
                var edgeWeight = currentNode.adjacentNodes[i][1]
                if (!settledNodes.includes(adjacentNode)){
                    this.calculateMinimumDistance(adjacentNode, edgeWeight, currentNode)
                    unsettledNodes.push(adjacentNode)

                }
            }
            settledNodes.push(currentNode)
        }
        console.log(a + " iterations")
    }

    getLowestDistanceNode(unsettledNodes){
        var lowest = null
        var lowestDistance = Number.MAX_SAFE_INTEGER
        for (var i = 0; i < unsettledNodes.length; i++)
        {
            var nodeDistance = unsettledNodes[i].distance
            if (nodeDistance < lowestDistance)
            {
                lowestDistance = nodeDistance
                lowest = unsettledNodes[i]
            }
        }
        
        return lowest;
    }

    calculateMinimumDistance(evaluationNode, edgeWeight, sourceNode){
        var sourceDistance = sourceNode.distance
        if (sourceDistance + edgeWeight < evaluationNode.distance)
        {
            evaluationNode.setDistance(sourceDistance + edgeWeight)
            var shortestPath = []
            for (var i = 0; i < sourceNode.shortestPath.length; i++){
                shortestPath.push(sourceNode.shortestPath[i])
            }
            shortestPath.push(sourceNode)
            evaluationNode.setShortestPath(shortestPath)
        }
    }




}

//----------------------------------------------

//console.log("Hello World!")
//console.log("This is the second message...")

var p = new Pather()
var matrix = [
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [1, 1, 1, 0],
    [2, 0, 2, 0],
]
var start = [0, 0]
p.initializeGraph(matrix)
var result = p.findShortestPathToEnds(start[0], start[1])

console.log(result)

