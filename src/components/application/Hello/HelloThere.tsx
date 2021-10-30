import { useTranslation } from "react-i18next";
import { Container, Row } from "react-bootstrap";

const HelloThere = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container className='hello-container'>
      <Row>
        <img className='hello-img seperator-img' />
      </Row>
      <Row>
        <h1 className='hello-heading'>{t('hello.name')}</h1>
      </Row>
      <Row>
        <h2 className='hello-heading hello-heading2'>{t('hello.position')}</h2>
      </Row>
      <Row>
        <img className='hello-img seperator-img rotated' />
      </Row>
    </Container>
  );
}

export default HelloThere;