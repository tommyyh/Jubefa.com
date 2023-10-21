import React from 'react';
import css from './whatWeDo.module.scss';

const WhatWeDo = ({ langCode, lang, setContactOpen }) => {
  const l = lang.construction.wwd;

  return (
    <div className={css['cont']}>
      <section className={css['landing']}>
        <h1>{l.title}</h1>
        <p>{l.text}</p>
      </section>
    </div>
  );
};

export default WhatWeDo;
