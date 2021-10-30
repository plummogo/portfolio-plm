import { useTranslation } from "react-i18next";

const HelloThere = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className='hello-container'>
      <img className='hello-img seperator-img' />
      <h1 className='hello-heading'>{t('hello.name')}</h1>
      <h2 className='hello-heading hello-heading2'>{t('hello.position')}</h2>
      <img className='hello-img seperator-img rotated' />
    </div>
  );
}

export default HelloThere;