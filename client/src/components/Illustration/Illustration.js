import React from 'react';
import css from './illustration.module.scss';
import Cta from 'components/Cta/Cta';
import mobileIllSVG from 'assets/icons/mobile_illustration.svg';

const Illustration = ({ langCode, lang: l }) => {
  return (
    <section className={css['illustration']}>
      <div className={css['content']}>
        <h3>{l.sub}</h3>
        <h2>{l.title}</h2>
        <p>{l.text}</p>

        <Cta link={`/${langCode}/`} title={l.cta} />
      </div>

      {/* Illustration */}
      <img
        src={mobileIllSVG}
        className={css['graph']}
        alt='graph illustration'
      />
    </section>
  );
};

export default Illustration;
