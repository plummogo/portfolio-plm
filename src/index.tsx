import React from 'react';
import ReactDOM from 'react-dom';
import './styles/sass/index.scss';
import HelloThere from './components/application/Hello/HelloThere';
import NavBar from './components/layout/NavBar';
import reportWebVitals from './reportWebVitals';
import Container from 'react-bootstrap/Container';
import Skill from './components/application/Skills/Skill';

ReactDOM.render(
  <>
    <NavBar />
    <Container>
      <HelloThere />
      <Skill />
    </Container>
  </>,
  document.getElementById('root')
);

reportWebVitals();