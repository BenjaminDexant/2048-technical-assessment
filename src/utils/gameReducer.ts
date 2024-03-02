import { useId } from "react";

import { IAction, IGameState } from "../types/interfaces";

// Just copied pasted and cleaned up for simple use case for now

const gameReducer = (
    state: IGameState,
    action: IAction,
  ) => {
    switch (action.type) {
      case "create_tile": {
        const tileId = useId();
        const [x, y] = action.tile.position;
        const newBoard = JSON.parse(JSON.stringify(state.board));
        newBoard[y][x] = tileId;
  
        return {
          ...state,
          board: newBoard,
          tiles: {
            ...state.tiles,
            [tileId]: {
              id: tileId,
              ...action.tile,
            },
          },
          tilesByIds: [...state.tilesByIds, tileId],
        };
      }
      case "move_up": {
        console.log("Moving tiles up");
        return state;
      }
   
      default:
        return state;
    }
}

  export default gameReducer;
