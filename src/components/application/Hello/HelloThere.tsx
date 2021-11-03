import { useTranslation } from "react-i18next";
import { Container, Row } from "react-bootstrap";
import 'react-star-wars-crawl/lib/index.css';
import Crawl from 'react-star-wars-crawl';

function HelloThere() {
  const { t } = useTranslation();
  const subTitle = <img className='hello-img' alt='hello' />

  return (
    <Container className='hello-container'>
      <Row>
        <img className='hello-img seperator-img' alt='separator-start'/>
      </Row>
      <Row>
        <Crawl
          title={t('hello.name')}
          subTitle={subTitle}
          text={t('hello.position')}
        />
      </Row>
      <Row>
        <img className='hello-img seperator-img' alt='separator-end' />
      </Row>
    </Container>
  );
}

export default HelloThere;