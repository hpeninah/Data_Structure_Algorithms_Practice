/**
 * Return a string representing the path through the maze.
 * @param {array} maze
 * @param {array} index The starting point
 **/

 let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function mazeSolver(maze, index = [0, 0], path ="", results =[]) {
    let [row, col] = index;
    //base case
    if(
        row < 0 || 
        col < 0 || 
        row >= maze.length || 
        col >= maze.length || 
        maze[row][col] === "*"
        ){
        return;
    }

    if (maze[row][col] === "e"){
        console.log('path to exit:', path)
        results.push(path);
        return;
    }

    if(maze[row][col] === " ") {
        //recursively take all directions until path hits "e"
        maze[row][col] = 9;
        mazeSolver(maze, [row, col + 1], path + "R", results); //only taking right
        mazeSolver(maze, [row + 1, col], path + "D", results); // only down
        mazeSolver(maze, [row, col - 1], path + "L", results); // only left
        mazeSolver(maze, [row - 1, col], path + "U", results); // only up
    }
    return results[0];
}

console.log(mazeSolver(mySmallMaze, [0,0]));