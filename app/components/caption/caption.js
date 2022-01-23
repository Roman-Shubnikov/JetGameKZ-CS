import { Typography } from '@mui/material';


import styles from './caption.module.css'
export const Caption = ({children, isLink, ...props}) => {
    const classes = props.className ? styles.root + ' ' + props.className : styles.root
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