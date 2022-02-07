import { Typography } from '@mui/material';
import clsx from 'clsx';

import useStyles from './header.styles'
export const Header = ({children, ...props}) => {
    const styles = useStyles();
    const classes = clsx(props.className, styles.root)
  return (
      <Typography variant='h1' component='h1' {...props} className={classes}>
        {children}
      </Typography>
  )
}