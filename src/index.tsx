import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './assets/sass/index.scss';
import './utils/i18n/i18n';
import { Container, Row } from 'react-bootstrap';
import NavBar from './components/layout/NavBar';
import HelloThere from './components/application/Hello/HelloThere';
import AboutMe from './components/application/About/AboutMe';
import Skill from './components/application/Skills/Skill';
import Hobby from './components/application/Hobbies/Hobby';
import Contact from './components/application/Contact/Contact';

ReactDOM.render(
  <>
    <NavBar />
    <Container>
      <Row>
        <HelloThere />
      </Row>
      <Row>
        <AboutMe />
      </Row>
      <Row>
        <Skill />
      </Row>
      <Row className='component-row'>
        <Hobby />
      </Row>
      <Row>
        <Contact />
      </Row>
    </Container>
  </>,
  document.getElementById('root')
);

reportWebVitals();