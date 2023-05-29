import React from 'react';
import css from './landing.module.scss';
import Cta from 'components/Cta/Cta';
import solarPanel1PNG from 'assets/images/solarPanel1.png';
import solarPanel2PNG from 'assets/images/solarPanel2.png';

const Landing = ({ langCode, lang }) => {
  const l = lang.solar.landing;

  return (
    <main className={css['landing']}>
      <div>
        <h3>{l.sub}</h3>
        <h1>{l.title}</h1>
        <p>{l.text}</p>

        <Cta title={l.cta} link={`/${langCode}`} />
      </div>

      <div className={css['illustration']}>
        <img
          src={solarPanel1PNG}
          alt='graphs'
          className={css['illustration1']}
        />
        <img
          src={solarPanel2PNG}
          alt='graphs'
          className={css['illustration2']}
        />
      </div>
    </main>
  );
};

export default Landing;
