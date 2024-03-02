import React from 'react'

import GameProvider from './context/gameContextProvider'
import BoardScreen from './screens/BoardScreen'

import './App.css'

const App: React.FC = () =>
  <GameProvider>
    <BoardScreen />
  </GameProvider>

export default App
