import React from 'react';
import css from './landing.module.scss';
import { Link } from 'react-router-dom';
import Cta from 'components/Cta/Cta';

const Landing = ({ l, langCode }) => {
  return (
    <main className={css['cont']}>
      <div className={css['landing']}>
        <h1>{l.title}</h1>
        <p>{l.text}</p>

        <Cta link={`/${langCode}`} title={l.cta} />
      </div>
    </main>
  );
};

export default Landing;
