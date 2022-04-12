import React from 'react';
import {
  Button, Card, CardActions, Checkbox, Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { deleteCompleteTodo } from '../../../actions/todos';
import useStyles from './styles';

const CompleteTodoItem = ({ list }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card className={classes.card}>
      <Checkbox disabled checked />
      <Typography className={classes.title} variant='h5' gutterBottom>{list.name}</Typography>

      <CardActions className={classes.cardActions}>
        <Button
          onClick={() => dispatch(deleteCompleteTodo(list.id))}
          size='small'
          color='primary'
        >
          <DeleteIcon fontSize='small' />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default CompleteTodoItem;
