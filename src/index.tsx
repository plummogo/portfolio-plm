import React from 'react';
import ReactDOM from 'react-dom';
import './styles/sass/index.scss';
import NavBar from './components/layout/NavBar';
import HelloThere from './components/application/Hello/HelloThere';
import AboutMe from './components/application/About/AboutMe';
import Skill from './components/application/Skills/Skill';
import reportWebVitals from './reportWebVitals';
import { Element } from 'react-scroll'


ReactDOM.render(
  <div className='container'>
    <NavBar />
    <HelloThere />
    <AboutMe />
    <Skill />
  </div>,
  document.getElementById('root')
);

reportWebVitals();