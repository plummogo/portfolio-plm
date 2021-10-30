import { useTranslation } from "react-i18next";
import { Container, Row, Col } from 'react-bootstrap';

const AboutMe = () => {
    const { t } = useTranslation();

    return (
        <Container className='about-container'>
            <Row>
                <h1>{t('navbar.about')}</h1>
            </Row>
            <Row className='desc-container'>
                <Col md={8} className='about-desc-col'>
                    <h1>{t('about.greeting')}</h1>
                    <h2 className='about-desc'>{t('about.desc')}</h2>
                </Col>
                <Col md={4} >
                    <img className='about-plm-img' />
                    <p className='about-plm-desc'>Szilvási István Péter</p>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutMe;