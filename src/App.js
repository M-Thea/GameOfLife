import { useState, useEffect} from "react";
import {initFirstGrid, initCustomGrid, updateGrid} from "./Components/GameLogic.js"
import './App.css';
import './Styles/GoL.css'
import { RenderNormalBoard } from "./Components/RenderNormalBoard.js";
import { RenderCustomBoard } from "./Components/RenderCustomBoard.js";
import { ControlBar } from "./Components/ControlBar.js";
import { TitleBar } from "./Components/TitleBar.js"
// :)
function App() {
  const [gameType, setGameType] = useState(true);
  const [grid, setGrid] = useState([]);
  const [started, setStarted] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [cellSize, setCellSize] = useState(3);
  const [speed, setSpeed] = useState(600);

  // renders random board if normal mode, empty board if custom mode
  useEffect(() => {
    gameType ? setGrid(initFirstGrid) : setGrid(initCustomGrid)
  }, [gameType])

  //runs when started  
  useEffect(() => {
      if(started){
          const interval = setTimeout(() => {
              setGrid(updateGrid(grid));
          },speed);
          return () => clearTimeout(interval)}})

  return (
    <div className="App">
      <TitleBar />
      <div className="GoL">
      <ControlBar
        setCellSize={setCellSize} setGrid={setGrid}
        started={started} setStarted={setStarted}
        setSpeed={setSpeed} gameType={gameType} setGameType={setGameType}/>
      {gameType ? <RenderNormalBoard grid={grid} cellSize={cellSize}/> :
      <RenderCustomBoard clicked={clicked} setClicked={setClicked} grid={grid} cellSize={cellSize}/>}
      </div>
    </div>
  );
}

export default App;
