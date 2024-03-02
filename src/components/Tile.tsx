import React from 'react';

import { ITileProps } from '../types/interfaces';

const Tile: React.FC<ITileProps> = ({ position, value }) => {
    return (
        <div>
            {value}
        </div>
    );
}

export default Tile;
