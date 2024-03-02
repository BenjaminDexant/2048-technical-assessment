import { PropsWithChildren, useReducer } from "react";

import GameContext from "./gameContext";

import gameReducer from "../utils/gameReducer";
import createBoard from "../utils/createBoard";

import { IGameState } from "../types/interfaces";

// Initialising the game state with a new board
const initialState: IGameState = {
    board: createBoard(),
    tiles: {},
    tilesByIds: [],
    hasChanged: false,
};

const GameProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [gameState, dispatch] = useReducer(gameReducer, initialState);

    const getRandomInt = (max: number) => {
        return Math.floor(Math.random() * max);
    }

    const startGame = () => {
        dispatch({ type: "create_tile", tile: { position: [0, 1], value: 2 } });
        dispatch({ type: "create_tile", tile: { position: [0, 2], value: 2 } });
    };

    return (
        <GameContext.Provider
            value={{ startGame }}
        >
            {children}
        </GameContext.Provider>
    );
}

export default GameProvider;
