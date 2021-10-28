import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class AboutMe extends React.Component {
    render() {
        return (
            <Container className='about-container'>
                <Row>
                    <img className='hello-img' />
                </Row>
                <Row>
                    <h1 className='skill-heading'>.about me</h1>
                </Row>
                <Row className='skill-desc-container'>
                    <Col md={8}>
                        {this.renderIntroduce()}
                    </Col>
                    <Col md={4} >
                        {this.renderPicture()}
                    </Col>
                </Row>
            </Container>
        );
    }

    renderIntroduce = () => {
        return (
            <>
                <h2 className='skill-heading skill-heading2'>Hello there!</h2>
                <span>spanspanspanspanspanspanspanspanspanspanspanspanspanspanspanspanspanspanspanspanspan</span>
            </>
        );
    }

    renderPicture = () => {
        return (
            <>
                <img className='about-plm-img' src={require(`../../../assets/img/about/plm.png`).default} title='Hello There!' />
                <p className='about-plm-desc'>Szilvási István Péter</p>
            </>
        );
    }
};

export default AboutMe;