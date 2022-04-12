import React from 'react';
import {
  Button, Card, CardActions, Checkbox, Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useStyles from './styles';

import {deleteTodo, completeTodo, todoDetails } from '../../../actions/todos';

const TodoItem = ({ list }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleComplete = () => {
    dispatch(deleteTodo(list.id));
    dispatch(completeTodo(list));
  };
  const handleDetails = () => {
    navigate(`/todos${list.id}`);
    dispatch(todoDetails(list));
  };
  return (
    <Card className={classes.card}>
      <Checkbox onClick={handleComplete} />

      <Typography className={classes.title} variant='h5' gutterBottom>{list.name}</Typography>

      <CardActions className={classes.cardActions}>
        <Button
          onClick={() => dispatch(deleteTodo(list.id))}
          size='small'
          color='primary'
        >
          <DeleteIcon fontSize='small' />
          Delete
        </Button>
        <Button
          onClick={handleDetails}
          size='small'
          color='primary'
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default TodoItem;
