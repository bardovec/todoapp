import React from 'react';
import {
  AppBar, Typography, Button, Box,
} from '@material-ui/core';

import { useNavigate } from 'react-router-dom';

import useStyles from './styles';
import logo from '../../images/logo.png';

const Navbar = () => {
  const navigate = useNavigate()
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <Box className={classes.brandContainer}>
        <Typography onClick={() => navigate('/')} className={classes.heading} variant='h2' align='center'>
          Todo App
        </Typography>
        <img className={classes.image} src={logo} alt='logo' height='60' />
        <Button onClick={() => navigate('/todos')}variant='contained' className={classes.btn} color='secondary'>Todos</Button>
        <Button onClick={() => navigate('/photos')} variant='contained' color='primary'>Photos</Button>
      </Box>
    </AppBar>
  );
};

export default Navbar;
