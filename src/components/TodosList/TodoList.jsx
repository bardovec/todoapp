import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import TodoItem from './TodoItem/TodoItem';
import CompleteTodoItem from './CompleteTodoItem/CompleteTodoItem';

const TodoList = () => {
  const todoData = useSelector((state) => state.todos.todos);
  const isComplete = useSelector((state) => state.todos.isComplete);
  return (
    <>
      <h2>TODO LIST</h2>
      {
      !todoData.length ? 'Nothing here yet' : (
        <Grid container spacing={3}>
          {
              todoData.map((list) => (
                <Grid key={list.id} item sm={8}>
                  <TodoItem list={list} />
                </Grid>
              ))
            }
        </Grid>
      )
          }
      {
                  isComplete.map((list) => (
                    <Grid key={list.id} item sm={8}>
                      <CompleteTodoItem list={list} />
                    </Grid>
                  ))
              }
    </>
  );
};

export default TodoList;
