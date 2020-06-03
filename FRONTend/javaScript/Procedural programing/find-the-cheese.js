// Find the Cheese
// You are a mouse, you are hungry, you are in a maze, there is cheese somewehere, you can smell it.

// The maze is presented as a 2D matrix that contains only 3 integers 1, 0 or 2.
// The position of the mouse is marked as 1, an empty field is marked as 0, the position of the cheese is marked as 2.
// For example mat = [[0,0,0], [0,1,0], [0,0,2]] represents a maze looking like:

// 0 0 0
// 0 1 0
// 0 0 2

// The mouse can move up, down, left and right.
// Write an algorithm that will move the mouse until it finds the cheese, printing all places it traveled to find it.
// There is always one cheese.

// For the example above the printing would look like (if the mouse went down and then right):
// I am at [1,1], no cheese I am at [2,1], no cheese I am at [2,2], found the cheese

// The goal is not to find the shortest way, just any way to the cheese.

function findTheCheese(maze) {
    let { mouseRow, mouseCol } = findMouseLocation(maze);
    const { cheeseRow, cheeseCol } = findCheeseLocation(maze);
    console.log(`mouse is at ${mouseRow}, ${mouseCol}`);
    console.log(`cheese is at ${cheeseRow}, ${cheeseCol}`);

    while (mouseRow != cheeseRow || mouseCol != cheeseCol) {
        let { newRow, newCol } = moveMouse(mouseRow, mouseCol, cheeseRow, cheeseCol);
        console.log(`I am at [${newRow}, ${newCol}]`);
        mouseRow = newRow;
        mouseCol = newCol;
    }
    console.log('found the cheese');
};

function moveMouse(mR, mC, cR, cC) {
    if (mR != cR) {
        if (mR < cR) {
            mR += 1;
        } else {
            mR -= 1;
        }
    } else {
        if (mC < cC) {
            mC += 1;
        } else {
            mC -= cC;
        }
    }
    return { newRow: mR, newCol: mC };
};

function findMouseLocation(maze) {
    for (let row = 0; row < maze.length; row++) {
        const currentRow = maze[row];
        for (let col = 0; col < currentRow.length; col++) {
            if (currentRow[col] == 1) {
                return {
                    mouseRow: row,
                    mouseCol: col
                };
            }
        }
    }
    return null;
};

function findCheeseLocation(maze) {
    for (let row = 0; row < maze.length; row++) {
        let currentRow = maze[row];
        for (let col = 0; col < currentRow.length; col++) {
            if (currentRow[col] == 2) {
                return {
                    cheeseRow: row,
                    cheeseCol: col
                };
            }
        }
    }
    return null;
};

findTheCheese([
    [1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0]
]);