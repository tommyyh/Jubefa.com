import React from 'react';
import css from './whatwedo.module.scss';
import Cta from 'components/Cta/Cta';
import variablesJSON from 'data/variables/variables.json';

const WhatWeDo = ({ langCode, lang, img1, img2 }) => {
  const l = lang;

  return (
    <section className={css['wwd']}>
      <div className={css['inner']}>
        <h3>{l.sub}</h3>
        <h2>{l.title}</h2>
        <p>{l.text}</p>

        <Cta
          title={l.cta}
          link={`/${langCode}/`}
          color={variablesJSON.colors.accent2}
        />

        <div className={css['images']}>
          <img src={img1} alt='solar' />
          <img src={img2} alt='solar' />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
