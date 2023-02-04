import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from "react-router-dom";
import {Game} from "./components/Game";
import {MainMenu} from "./components/MainMenu";
import {StartGame} from "./components/StartGame";
import {Settings} from "./components/Settings";
import {NotFound} from "./components/NotFound";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<MainMenu/>} />
        <Route path="/game" element={<Game/>} />
        <Route path="/start" element={<StartGame/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="*" element={<NotFound/>} />
       </Routes>
    </div>
  )
}

export default App
