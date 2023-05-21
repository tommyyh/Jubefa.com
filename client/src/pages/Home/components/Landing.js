import React from 'react';
import css from './landing.module.scss';
import { Link } from 'react-router-dom';
import ChevronSVG from 'assets/icons/chevron.svg';

const Landing = ({ langCode, lang }) => {
  const l = lang.landing;

  return (
    <main className={css['landing']}>
      <h3>{l.sub}</h3>
      <h1>
        <span>{l.title.split(' ').slice(0, 3).join(' ')}</span>
        <span> {l.title.split(' ').slice(3, l.title.length).join(' ')}</span>
      </h1>

      <Link to={`/${langCode}/`} className={css['cta']}>
        <div className={css['cta-main']}>
          <img src={ChevronSVG} alt='chevron' />
        </div>

        <div className={css['cta-bubble']}>
          <h4>{l.cta}</h4>

          <div className={css['cta-dot']}></div>
        </div>
      </Link>
    </main>
  );
};

export default Landing;
