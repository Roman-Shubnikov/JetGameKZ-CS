import { Box } from '@mui/material'
export const OnlineCircle = ({children, size=13, ...props}) => {
    return (
        <Box {...props} 
        style={{width: size, height: size, backgroundColor: 'var(--online)', borderRadius: '100%'}}>
        </Box>
    )
}