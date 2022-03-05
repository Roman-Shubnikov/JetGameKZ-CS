import { Avatar } from '@mui/material';
import { Box } from '@mui/system';
import clsx from 'clsx';
import { Caption, Header, Header2 } from '..';
import styles from './cell.module.css'
export const Cell = ({children, photo, position, description, after, ...props}) => {
    const classes = clsx(props.className, styles.root)
  return (
      <Box {...props} className={classes}>
            <Box className={styles.main}>
                <Header sx={{mr: 1.5}} color="var(--cell_position)">{position}</Header>
                <Avatar 
                sx={{width: 52, height: 52}}
                className={styles.avatar}
                alt='ava' src={photo} />
                <Box>
                    <Header2>
                        {children}
                    </Header2>
                    <Caption color='var(--text_description)' textAlign='start'>
                        {description}
                    </Caption>
                </Box>
            </Box>
        <Box>
                {after}
        </Box>
          
      </Box>
  )
}