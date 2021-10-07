import React from 'react';
import ReactDOM from 'react-dom';
import './styles/sass/index.scss';
import HelloThere from './components/application/Hello/HelloThere';
import  NavBar  from './components/layout/NavBar';
import reportWebVitals from './reportWebVitals';
import Container from 'react-bootstrap/Container';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Container>
      <HelloThere />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();