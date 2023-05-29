import React from 'react';
import css from './whatwedo.module.scss';
import Cta from 'components/Cta/Cta';
import variablesJSON from 'data/variables/variables.json';
import wwd1PNG from 'assets/images/solar/wwd1.png';
import wwd2PNG from 'assets/images/solar/wwd2.png';

const WhatWeDo = ({ langCode, lang }) => {
  const l = lang.solar.wwd;

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
          <img src={wwd1PNG} alt='solar' />
          <img src={wwd2PNG} alt='solar' />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
