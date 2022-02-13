import { Rating } from '@mui/material';
import clsx from 'clsx';
import { Caption, Cell } from '..';
export const FeedbackCell = ({children, photo, rating, text, ...props}) => {
    const classes = clsx(props.className)
  return (
      <Cell
      {...props}
      className={classes}
      description={<>
          <Caption>
              {text}
          </Caption>
          <Rating
          sx={{
              '& .MuiRating-icon': {
                  color: '#faaf00'
              }
          }} 
          readOnly value={rating} /></>
      }>
          {children}
      </Cell>
  )
}