import { useTranslation } from "react-i18next";
import { Accordion, Container, Row } from 'react-bootstrap';
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import AccordionBody from "react-bootstrap/esm/AccordionBody";

const Hobby = () => {
    const { t } = useTranslation();

    return (
        <Container className='hobby-container'>
            <Row>
                <h1>{t('navbar.hobbies')}</h1>
            </Row>
            <Row>
                <Accordion>
                    <AccordionItem className='accordion-border' eventKey='1'>
                        <AccordionHeader>
                            {t('hobbies.r2d2')}
                        </AccordionHeader>
                        <AccordionBody>
                            {t('hobbies.r2d2.desc')}
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem className='accordion-border' eventKey='2'>
                        <AccordionHeader>
                            {t('hobbies.mediacenter')}
                        </AccordionHeader>
                        <AccordionBody>
                            {t('hobbies.mediacenter.desc')}
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem className='accordion-border' eventKey='3'>
                        <AccordionHeader>
                            {t('hobbies.gaming')}
                        </AccordionHeader>
                        <AccordionBody>
                            {t('hobbies.gaming.desc')}
                        </AccordionBody>
                    </AccordionItem>
                </Accordion>
            </Row>
        </Container>
    );
}

export default Hobby;