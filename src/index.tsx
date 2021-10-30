import ReactDOM from 'react-dom';
import './assets/sass/index.scss';
import NavBar from './components/layout/NavBar';
import HelloThere from './components/application/Hello/HelloThere';
import AboutMe from './components/application/About/AboutMe';
import Skill from './components/application/Skills/Skill';
import reportWebVitals from './reportWebVitals';
import { Container, Row } from 'react-bootstrap';
import './utils/i18n/i18n';

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
    </Container>
  </>,
  document.getElementById('root')
);

reportWebVitals();