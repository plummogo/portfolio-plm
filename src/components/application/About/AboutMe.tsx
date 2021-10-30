import { useTranslation } from "react-i18next";
import { Container, Row, Col } from 'react-bootstrap';

const AboutMe = () => {
    const { t, i18n } = useTranslation();

    return (
        <Container className='about-container'>
            <Row>
                <h1 className='skill-heading'>{t('navbar.about')}</h1>
            </Row>
            <Row className='skill-desc-container'>
                <Col md={8}>
                    <h2 className='skill-heading skill-heading2'>{t('about.greeting')}</h2>
                    <h2 className='about-desc'>{t('about.desc')}</h2>
                </Col>
                <Col md={4} >
                    <img className='about-plm-img' src={require(`../../../assets/img/about/plm.png`).default} />
                    <p className='about-plm-desc'>Szilvási István Péter</p>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutMe;