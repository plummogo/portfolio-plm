import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "react-bootstrap";
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BadgeIcon from '@mui/icons-material/Badge';

const Contact = () => {
    const { t } = useTranslation();
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <Container className='contact-container'>
            <Row>
                <h1>{t('navbar.contact')}</h1>
            </Row>
            <Row>
                <Col>
                    <AutoplaySlider
                        play={true}
                        cancelOnInteraction={false}
                        interval={6000}
                        cssModule={AwesomeSliderStyles}
                    >
                        <div><a className='contact-icon' href='https://www.linkedin.com/in/peter-szilvasi-ba91b6147/' target='_blank'><LinkedInIcon /></a></div>
                        <div><a className='contact-icon' href='https://github.com/plummogo' target='_blank'><GitHubIcon /></a></div>
                        <div><a className='contact-icon'href='cv.pdf' download><BadgeIcon /></a></div>
                    </AutoplaySlider>
                </Col>
                <Col>
                dummy text for it later
                </Col>
            </Row>
        </Container >
    );
}

export default Contact;