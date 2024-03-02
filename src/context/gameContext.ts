import { createContext } from "react";

import { IGameContext } from "../types/interfaces";

const gameContext = createContext<IGameContext>({
    startGame: () => { },
});

export default gameContext;

