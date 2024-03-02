const createBoard = (height: number = 4, width: number = 4): string[][] => {
    // a function to create a 2D array with the given height and width
    // and fill it with empty strings

    const board: string[][] = [];

    for (let row = 0; row < height; row++) {
        board.push([]);
        for (let column = 0; column < width; column++) {
            board[row].push("");
        }
    }

    return board;
}

export default createBoard;
