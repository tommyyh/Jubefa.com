import React from 'react';
import css from './services.module.scss';
import Cta from 'components/Cta/Cta';

const Services = ({ langCode, lang, setContactOpen }) => {
  const l = lang.construction.services;

  return (
    <section className={css['landing']}>
      <h3>{l.sub}</h3>
      <h1>{l.title}</h1>
      <p>{l.text}</p>

      <Cta title={l.cta} onClick={() => setContactOpen(true)} />
    </section>
  );
};

export default Services;
