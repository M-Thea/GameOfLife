import { initCustomGrid, initFirstGrid } from "./GameLogic";
import Button from '@mui/material/Button';

export function ResetButton({setStarted, setGrid, gameType, setGameType}) {
    return (
        <div>
             <Button
             sx={{
                background: '#6956A9',
                color: '#392f5c',
                ":hover":{background: '#8677ba'},   
             }}
            variant="contained"
            onClick={() => {
                setStarted(false);
                gameType ? 
                    setGrid(initFirstGrid()) : setGrid(initCustomGrid());
            }}>Reset</Button>
        </div>
    )}
export function ToggleStartButton({setStarted, started}) {
    return (
        <div className="update-size-button">
            <Button
            sx={{
                background: '#6956A9',
                color: '#392f5c',
                ":hover":{background: '#8677ba'}, 
            }}
            variant="contained"
            className="update-button"
            onClick={() => {
                setStarted(!started);
            }}>{started ? "Stop" : "Start"}</Button>
        </div>
    )}