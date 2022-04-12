import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { fetchById } from '../../actions/posts';
import PhotosList from '../../components/PhotosList/PhotosList';

const Photos = () => {
  const [postData, setPostData] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(fetchById(postData));
    localStorage.setItem('key', postData);
    setPostData('')
  };
  window.onbeforeunload = function()
  {
    localStorage.removeItem('key');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
            required
          variant='outlined'
          value={postData}
          onChange={(e) => setPostData(e.target.value)}
        />
        {localStorage.getItem('key') === postData
          ? <Button style={{marginLeft: '10px'}} variant='contained' disabled color='primary' type='submit'>Get photos</Button>
          : <Button style={{marginLeft: '10px'}} variant='contained' disabled={false} color='primary' type='submit'>Get photos</Button>}

      </form>
      <PhotosList />
    </>
  );
};

export default Photos;
