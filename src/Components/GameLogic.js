
export function initCustomGrid() {
    const width = 60;
    const height = 60;
    const firstCustomGrid = []
    for (let i = 0; i < height; i++){
        const newRow = [];
        for(let j = 0; j< width; j++){
            newRow.push(0)
        }
        firstCustomGrid.push(newRow)
    }
    return firstCustomGrid
}

// called from renderCustomBoard
export function changeClickedCell(i, j, grid) {
    let clickedCell = 0
    if (grid[i][j] === 0){
        clickedCell = 1}
    if (grid[i][j] === 1){
        clickedCell = 0}
    grid[i][j] = clickedCell
    return grid
}

export function initFirstGrid() {
    const width = 60;
    const height = 60;
    const firstGrid = []
    for (let i = 0; i < height; i++){
        const newRow = [];
        for(let j = 0; j< width; j++){
            newRow.push(Math.floor(Math.random() * 2))
        }
        firstGrid.push(newRow)
    }
    return firstGrid
}

function countNeighbours(i,j, grid){
    const height = grid.length
    const width = grid[0].length 
    let neighbourSum = 0
    for (let x = -1; x < 2; x++) { // iterates over neighbour offsets
        if (j + x >=0 && j + x <= width - 1) { // check left/right is valid
            if ( i > 0 &&grid[i - 1][j + x] === 1) {// check top neighbours
                neighbourSum++;
            }
            if (i < height - 1 && grid[i + 1][j + x] === 1) { // check bottom neighbours
                neighbourSum++;
            }
        }
    }
    if (j - 1 >= 0 && grid[i][j - 1] === 1) { // count left 
        neighbourSum++;
    }
    if (j + 1 <= width - 1 && grid[i][j + 1] === 1) { // count right
        neighbourSum++;
    }      
    console.log(neighbourSum)
    return neighbourSum
}
   
function getNextCellState(neighbourSum, currentCellState) {
    if (currentCellState === 1) { 
        if (neighbourSum < 2 || neighbourSum > 3) {
            return 0
        }
        if (neighbourSum === 2 || neighbourSum === 3) {
            return 1
        }
    }
    else {
        if (neighbourSum === 3) {
            return 1
        }
        else {
        
            return 0
        }
    }
}

export function updateGrid(grid) {   
    const nextGrid = []
    const height = grid.length
    const width = grid[0].length
    for (let i = 0; i < height; i++){
        const nextRow = [];
        for(let j = 0; j < width; j++){ 
            let currentCellState = grid[i][j]
            let currentCellNeighbours = countNeighbours(i,j, grid)
            let nextCellState = getNextCellState(currentCellNeighbours, currentCellState)
            nextRow.push(nextCellState);
        }
    nextGrid.push(nextRow);
    }
    return nextGrid;
}


