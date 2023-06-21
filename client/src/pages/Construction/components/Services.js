import React from 'react';
import css from './services.module.scss';
import Cta from 'components/Cta/Cta';
import service1PNG from 'assets/images/construction/services1.png';
import service2PNG from 'assets/images/construction/services2.png';
import service3PNG from 'assets/images/construction/services3.png';
import service4PNG from 'assets/images/construction/services4.png';

const Services = ({ langCode, lang, setContactOpen }) => {
  const l = lang.construction.services;

  return (
    <section className={css['landing']}>
      <h3>{l.sub}</h3>
      <h1>{l.title}</h1>
      <p>{l.text}</p>

      <Cta title={l.cta} onClick={() => setContactOpen(true)} />

      <div className={css['images']}>
        <div className={css['image']}>
          <img src={service1PNG} alt='service' />
          <img
            src={service2PNG}
            alt='service'
            className={css['image-inner2']}
          />
        </div>
        <div className={css['image2']}>
          <img src={service3PNG} alt='service' />
          <img
            src={service4PNG}
            alt='service'
            className={css['image-inner4']}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
