import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import Photos from './pages/Photos/Photos';
import Todos from './pages/Todos/Todos';
import TodoDetail from './pages/TodoDetail/TodoDetail';

const App = () => (
  <Container maxWidth='lg'>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/photos' element={<Photos />} />
        <Route path='/todos' element={<Todos />} />
        <Route path='/todos:id' element={<TodoDetail />} />
      </Routes>
    </Router>
  </Container>
);

export default App;
