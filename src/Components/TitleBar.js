import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export function TitleBar(){
    return (
        <Box
        sx={{
            bgcolor: '#91a3d3',
        }}>
            <Typography variant='h2' align='left' sx={{color: '#2f274c', pl: 5}}>Game of Life </Typography>

        </Box>
    )
}
export default TitleBar;