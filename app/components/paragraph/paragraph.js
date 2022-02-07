
import { Box } from '@mui/system';
export const Paragraph = ({children, head, ...props}) => {
    
  return (
    <Box {...props} sx={{'&:not(:last-child)': {mb: 10}}}>
        <Box mb={4}>
            {head}
        </Box>
        <Box>
            {children}
        </Box>
    </Box>
  )
}