import React from 'react';
import css from './whatWeDo.module.scss';

const WhatWeDo = ({ langCode, lang, setContactOpen }) => {
  const l = lang.construction.wwd;

  return (
    <section className={css['landing']}>
      <h1>{l.title}</h1>
      <p>{l.text}</p>
    </section>
  );
};

export default WhatWeDo;
