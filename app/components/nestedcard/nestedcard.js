import { Box } from '@mui/system';
import clsx from 'clsx';
import styles from './nestedcard.module.css'
export const NestedCard = ({children, head, 
    color='var(--nested_card_background)', ...props}) => {
    const classes = clsx(props.className, styles.root)
  return (
    <Box {...props} sx={{backgroundColor: color}} className={classes}>
        {children}
    </Box>
  )
}