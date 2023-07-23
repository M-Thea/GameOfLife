import Slider from '@mui/material/Slider';
import { useState} from "react";

export function CellSizeSlider({setCellSize}) {
    const [sliderSize, setSliderSize] = useState(3)
    const changeSliderSize = (event) => {setSliderSize(event.target.value)}
    const changeSize = () => {setCellSize(sliderSize)}
    return (
        <Slider value={sliderSize} 
                onChange={changeSliderSize}
                onChangeCommitted={changeSize} 
                sx={{
                    width: '70%',
                    color: '#6956A9'}} 
                step={0.5} 
                min={1.5} 
                max={6} 
                defaultValue={3}/>
    )}

export function SpeedSlider({setSpeed}) {
    const [sliderSpeed, setSliderSpeed] = useState(-600)
    const changeSliderSpeed = (event) => {setSliderSpeed(event.target.value)}
    const changeSpeed = () => {setSpeed(Math.abs(sliderSpeed))}
    return (
        <Slider value={sliderSpeed}
                onChange={changeSliderSpeed}
                onChangeCommitted={changeSpeed}  
                sx={{
                    width: '70%',
                    color: '#6956A9'}} 
                step={-50} 
                min={-1000} 
                max={-50} 
                defaultValue={-600}/>
    )}


