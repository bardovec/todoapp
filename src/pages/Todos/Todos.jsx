import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { v1 as uuid } from 'uuid';
import { addTodo } from '../../actions/todos';
import TodoList from '../../components/TodosList/TodoList';

const Todos = () => {
  const [todoData, setTodoData] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(addTodo({
      id: uuid(),
      name: todoData,
    }));
    setTodoData('');
  };
  return (
      <>
    <div style={{display: 'flex', alignItems: 'center'}}>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          variant='outlined'
          value={todoData}
          onChange={(e) => setTodoData(e.target.value)}
        />
        <Button style={{marginLeft: '10px'}} variant='contained' color='primary' type='submit'>Add</Button>
      </form>
    </div>
  <TodoList />
      </>
  );
};

export default Todos;
