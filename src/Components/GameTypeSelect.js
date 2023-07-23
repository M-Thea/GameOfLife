import { FormControl, Select, InputLabel, MenuItem, FormHelperText } from '@mui/material';

export function GameTypeSelect({gameType, setGameType}){
    const selected = event => {setGameType(event.target.value)}
    return (
        <FormControl fullWidth sx={{pb: 1}}>
            <InputLabel>{gameType}</InputLabel>
            <FormHelperText>Game Type</FormHelperText>
            <Select value={gameType} onChange={selected}>
                <MenuItem value={true}>
                    Normal
                </MenuItem>
                <MenuItem value={false}>
                    Custom
                </MenuItem>
            </Select>
        </FormControl>
    )
}
export default GameTypeSelect