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
            <Row className='contact-row'>
                <p className='contact-desc-0'>{t('contact-desc-0')}</p>
                <p>{t('contact-desc-1')}</p>
                <p>{t('contact-desc-2')}</p>
                <p>{t('contact-desc-3')}</p>
                <p>{t('contact-desc-4')}</p>
                <AutoplaySlider
                    play={true}
                    cancelOnInteraction={false}
                    interval={6000}
                    cssModule={AwesomeSliderStyles}
                >
                    <span>
                        {'> '}Linkedin
                        <a href='https://www.linkedin.com/in/peter-szilvasi-ba91b6147/' target='_blank'>
                            <LinkedInIcon className='contact-icon' />
                        </a>
                    </span>
                    <div>
                        {'> '}GitHub
                        <a href='https://github.com/plummogo' target='_blank'>
                            <GitHubIcon className='contact-icon' />
                        </a>
                    </div>
                    <div>
                        {'> '}cv
                        <a href={process.env.PUBLIC_URL + '/cv.pdf'} target='_blank'>
                            <BadgeIcon className='contact-icon' />
                        </a>
                    </div>
                </AutoplaySlider>
            </Row>
        </Container >
    );
}

export default Contact;