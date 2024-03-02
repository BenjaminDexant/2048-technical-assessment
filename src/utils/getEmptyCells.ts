// Just copied pasted from https://github.com/mateuszsokola/2048-in-react/blob/master/context/game-context.tsx

const getEmptyCells = () => {
    const results: [number, number][] = [];

    // for (let x = 0; x < tileCountPerDimension; x++) {
    //   for (let y = 0; y < tileCountPerDimension; y++) {
    //     if (isNil(gameState.board[y][x])) {
    //       results.push([x, y]);
    //     }
    //   }
    // }
    return results;
};

  export default getEmptyCells;
