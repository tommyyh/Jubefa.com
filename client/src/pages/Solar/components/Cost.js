import React from 'react';
import css from './cost.module.scss';
import Cta from 'components/Cta/Cta';
import cost1PNG from 'assets/images/solar/cost1.png';
import cost2PNG from 'assets/images/solar/cost2.png';

const Cost = ({ langCode, lang }) => {
  const l = lang.solar.cost;

  return (
    <section className={css['cost']}>
      <h3>{l.sub}</h3>
      <h2>{l.title}</h2>
      <p>{l.text}</p>

      <Cta title={l.cta} link={`/${langCode}`} />

      <div className={css['illustration']}>
        <img src={cost1PNG} alt='graph' />
        <img src={cost2PNG} alt='graph' />
      </div>
    </section>
  );
};

export default Cost;
