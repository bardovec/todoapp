import React from 'react';
import { useSelector } from 'react-redux';
import {
  Box, Button, Grid, Typography,
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import useStyles from './styles';

const TodoDetail = () => {
  const details = useSelector((state) => state.todos.todoDetails);
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <>
      <div className={classes.detailCard}>

        <Typography className={classes.detailTitle} variant='h4'>Todo Detail</Typography>
      </div>
      {
      !details.length ? 'Nothing here yet' : (
        <div>
          {
            details.map((list) => (
              <div key={list.id}>
                <Typography className={classes.detailName}>{list.name}</Typography>
              </div>
            ))
                }
        </div>
      )
        }
      <Button style={{ marginTop: '20px' }} color='primary' onClick={() => navigate('/todos')} variant='contained'>Go back</Button>
    </>
  );
};

export default TodoDetail;
