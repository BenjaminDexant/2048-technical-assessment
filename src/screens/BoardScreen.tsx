import React, { useContext, useEffect, useRef } from 'react';
import GameContext from '../context/gameContext';

const BoardScreen: React.FC = () => {
    const initialized = useRef(false);
    const { startGame } = useContext(GameContext);

    useEffect(() => {
        if (initialized.current === false) {
            startGame();
            initialized.current = true;
        }
    }, [startGame]);


    return (
        <div>
            This is where the board will be displayed
        </div>
    )
}

export default BoardScreen;
