import { useTranslation } from "react-i18next";
import { Container, Row } from "react-bootstrap";
import 'react-star-wars-crawl/lib/index.css';
import Crawl from 'react-star-wars-crawl';

function HelloThere() {
  const { t, i18n } = useTranslation();
  const subTitle = <img className='hello-img' />

  return (
    <Container className='hello-container'>
      <Row>
        <img className='hello-img seperator-img' />
      </Row>
      <Row>
        <Crawl
          title={t('hello.name')}
          subTitle={subTitle}
          text={t('hello.position')}
        />
      </Row>
      <Row>
        <img className='hello-img seperator-img rotated' />
      </Row>
    </Container>
  );
}

export default HelloThere;