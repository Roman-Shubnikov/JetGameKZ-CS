import { Typography } from '@mui/material';


import styles from './header.module.css'
export const Header = ({children, ...props}) => {
    const classes = props.className ? styles.root + ' ' + props.className : styles.root
  return (
      <Typography variant='h1' component='h1' {...props} className={classes}>
        {children}
      </Typography>
  )
}