import React from 'react';
import css from './brownfield.module.scss';

const Brownfield = ({ langCode, lang, setContactOpen }) => {
  const l = lang.construction.brownfield;

  return (
    <section className={css['landing']}>
      <div className={css['cta-bubble']}>
        <h3>{l.sub}</h3>

        <div className={css['cta-dot']}></div>
      </div>

      <h2>{l.title}</h2>
      <p>{l.text}</p>
    </section>
  );
};

export default Brownfield;
