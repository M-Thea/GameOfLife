import {CellSizeSlider, SpeedSlider} from './Sliders';
import {ToggleStartButton, ResetButton} from "./Buttons";
import GameTypeSelect from './GameTypeSelect';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import '../Styles/UserInputs.css';
export function ControlBar({
    setGrid, started, setStarted, setCellSize, setSpeed, gameType, setGameType}) {
    return (
        <Box
        sx={{
            bgcolor: '#7f8eb4',
            width: '15%',
            height: '20%',
            opacity: 0.2,
            ":hover":{opacity: 0.9},
            border: 2,
            borderColor: '#5f72a1',
        }}>
            <Grid container spacing={2} alignItems='center'>
                <Grid item xs={2}>
                    <Typography sx={{ pl: 1, color: '#2f274c'}}>Zoom </Typography>
                </Grid>
                <Grid item xs={10}>
                    <CellSizeSlider setCellSize={setCellSize}/>
                </Grid>
            </Grid>
            <Grid container spacing={2} alignItems='center'>
                <Grid item xs={2}>
                    <Typography sx={{ pl: 1, color: '#2f274c'}}>Speed </Typography>
                </Grid>
                <Grid item xs={10}>
                    <SpeedSlider setSpeed={setSpeed}/>
                </Grid>
            </Grid>
            <ButtonGroup sx={{pb: 2}}>
                <ToggleStartButton setStarted={setStarted} started={started}/>
                <ResetButton 
                    setStarted={setStarted} setGrid={setGrid} 
                    gameType={gameType} setGameType={setGameType}/> 
            </ButtonGroup>
            <GameTypeSelect gameType={gameType} setGameType={setGameType}/>
        </Box> 
    )
}
export default ControlBar;