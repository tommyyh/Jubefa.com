import React from 'react';
import css from './roofTypes.module.scss';
import roofs1PNG from 'assets/images/solar/roofs1.png';
import roofs2PNG from 'assets/images/solar/roofs2.png';
import roofs3PNG from 'assets/images/solar/roofs3.png';
import roofs4PNG from 'assets/images/solar/roofs4.png';
import roofs5PNG from 'assets/images/solar/roofs5.png';
import roofs6PNG from 'assets/images/solar/roofs6.png';
import roofs7PNG from 'assets/images/solar/roofs7.png';
import roofs8PNG from 'assets/images/solar/roofs8.png';

const RoofTypes = ({ langCode, lang }) => {
  const l = lang.solar.roofs;

  return (
    <div className={css['cont']}>
      <section className={css['roofs']}>
        <h3>{l.sub}</h3>
        <h2>{l.title}</h2>

        <div className={css['list']}>
          <Roof l={l.roof1} img1={roofs1PNG} img2={roofs2PNG} />
          <Roof l={l.roof2} img1={roofs3PNG} img2={roofs4PNG} />
          <Roof l={l.roof3} img1={roofs5PNG} img2={roofs6PNG} />
          <Roof l={l.roof4} img1={roofs7PNG} img2={roofs8PNG} />
        </div>
      </section>
    </div>
  );
};

const Roof = ({ l, img1, img2 }) => {
  return (
    <div className={css['roof']}>
      <div className={css['images']}>
        <img src={img1} alt='roof type' />
        <img src={img2} alt='roof type' />
      </div>

      <h4>{l.title}</h4>
      <p>{l.text}</p>
    </div>
  );
};

export default RoofTypes;
