import { Typography } from '@mui/material';
import clsx from 'clsx';


import useStyles from './caption.styles'
export const Caption = ({children, isLink, ...props}) => {
    const styles = useStyles();
    const classes = clsx(styles.root, props.className)
    const typogr = 
      <Typography variant='p' component='p' {...props} className={classes}>
        {children}
      </Typography>
  return (
    isLink ? 
      <a>
        {typogr}
      </a>
    :
      typogr
  )
}