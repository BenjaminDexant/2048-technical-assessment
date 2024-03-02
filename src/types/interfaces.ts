interface IGameContext {
    startGame: () => void;
}

interface IGameState {
    board: string[][];
    tiles: Record<string, ITileProps>;
    tilesByIds: string[];
    hasChanged: boolean;
}

interface ITile {
    id?: string;
    position: [number, number];
    value: number;
};

type IAction =
  | { type: "create_tile"; tile: ITile }
  | { type: "clean_up" }
  | { type: "move_up" }
  | { type: "move_down" }
  | { type: "move_left" }
  | { type: "move_right" };

interface ITileProps {
    position: number;
    value: number;
}

export type { IGameContext, IGameState, IAction, ITileProps };