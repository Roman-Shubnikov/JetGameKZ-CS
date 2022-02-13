import { Box } from '@mui/material'
import styles from './sign.module.css'
export const SignBase = ({children, ...props}) => {
    const classes = props.className ? styles.root + ' ' + props.className : styles.root
    return (
        <Box {...props} className={classes}>
            {children}
        </Box>
    )
}