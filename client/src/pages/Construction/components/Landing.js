import React from 'react';
import css from './landing.module.scss';
import Cta from 'components/Cta/Cta';
import landing1PNG from 'assets/images/construction/landing1.png';
import landing2PNG from 'assets/images/construction/landing2.png';
import arrowPointerSVG from 'assets/icons/arrow_pointer.svg';

const Landing = ({ langCode, lang, setContactOpen }) => {
  const l = lang.construction.landing;

  return (
    <main className={css['landing']}>
      <div className={css['images']}>
        <img src={landing1PNG} alt='construction' />
        <img src={landing2PNG} alt='construction' />
      </div>

      <div>
        <h3>{l.sub}</h3>
        <h1>{l.title}</h1>

        <Cta title={l.cta} link={''} onClick={() => setContactOpen(true)} />
      </div>

      <img src={arrowPointerSVG} className={css['arrow']} alt='arrow' />
    </main>
  );
};

export default Landing;
