import Box from '@mui/material/Box';
import AspectRatio from '@mui/joy/AspectRatio';
import { useMemo } from "react"
import { changeClickedCell } from "../Components/GameLogic.js"

export function RenderCustomBoard({clicked, setClicked, setGrid, grid, cellSize}) {
    const liveCell = useMemo(() => {return (
        <AspectRatio 
            variant="alive"
            ratio= '1/1'
            sx={{
            border: '0.5px solid #1e1e2f',
            width: `${cellSize}vw`,
            bgcolor: '#566da9'}}/>
        )}, [cellSize])
    const deadCell = useMemo(() => {return (
        <AspectRatio 
            variant="alive"
            ratio= '1/1'
            sx={{
            border: '0.5px solid #1e1e2f',
            width: `${cellSize}vw`,
            bgcolor: '#000000'}}/>
        )}, [cellSize])
    
    const handleClick = (i, j, grid) => {
        changeClickedCell(i, j, grid);
        const interval = setTimeout(() => {
            setClicked(!clicked)},200);
        return () => clearTimeout(interval)
    }
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
        <Box sx={{
            overflow: 'hidden',
            width: `80vw`, 
            height: `80vh`, 
            border: '3px solid #a9566d'}}>

        <table cellSpacing={0} cellPadding={0}>
            <tbody>
            {grid.map((row, i) => 
            <tr>
            {row.map((cell, j) => 
            <th onClick={() => handleClick(i, j, grid)}>
            {cell ? liveCell : deadCell}
            </th>)}
            </tr>)}
            </tbody>
        </table>
        </Box>
        </div>
    )     
}