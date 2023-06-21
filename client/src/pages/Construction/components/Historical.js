import React from 'react';
import css from './historical.module.scss';
import Cta from 'components/Cta/Cta';
import historicalPNG from 'assets/images/construction/historical.png';
import variablesJson from 'data/variables/variables.json';

const Historical = ({ langCode, lang, setContactOpen }) => {
  const l = lang.construction.historical;

  return (
    <section className={css['landing']}>
      <img src={historicalPNG} alt='historical building blueprint' />

      <div>
        <h3>{l.sub}</h3>
        <h1>{l.title}</h1>
        <p>{l.text}</p>

        <Cta
          title={l.cta}
          onClick={() => setContactOpen(true)}
          color={variablesJson.colors.historical}
        />
      </div>
    </section>
  );
};

export default Historical;
