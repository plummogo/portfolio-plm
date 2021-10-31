import { useTranslation } from "react-i18next";
import { Container, Row } from "react-bootstrap";
import 'react-star-wars-crawl/lib/index.css';
import Crawl from 'react-star-wars-crawl';
import { useCallback, useState, useEffect } from "react";

function HelloThere() {
  const { t, i18n } = useTranslation();
  const [, updateState] = useState();
  
  setInterval(() => {
  }, 10000);

  return (
    <Container className='hello-container'>
      <Row>
        <img className='hello-img seperator-img' />
      </Row>
      <Row>
        <Crawl
          title={t('hello.name')}
          subTitle={t('hello.position')}
          text='Hello' />
      </Row>
      <Row>
        <img className='hello-img seperator-img rotated' />
      </Row>
    </Container>
  );
}

export default HelloThere;