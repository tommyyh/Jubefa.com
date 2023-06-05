import React from 'react';
import css from './landing.module.scss';
import { Link } from 'react-router-dom';
import ChevronSVG from 'assets/icons/chevron.svg';

const Landing = ({ langCode, lang, setContactOpen }) => {
  const l = lang.landing;
  const slicePosition = langCode === 'de' ? 2 : 3; // If its EN slice the title at a different position due to different lengths

  return (
    <div className={css['cont']}>
      <main className={css['landing']}>
        <div>
          <h3>{l.sub}</h3>
          <h1>
            <span>{l.title.split(' ').slice(0, slicePosition).join(' ')}</span>
            <span>
              {' '}
              {l.title
                .split(' ')
                .slice(slicePosition, l.title.length)
                .join(' ')}
            </span>
          </h1>
        </div>

        <Link
          to={``}
          onClick={() => setContactOpen(true)}
          className={css['cta']}
        >
          <div className={css['cta-main']}>
            <img src={ChevronSVG} alt='chevron' />
          </div>

          <div className={css['cta-bubble']}>
            <h4>{l.cta}</h4>

            <div className={css['cta-dot']}></div>
          </div>
        </Link>
      </main>
    </div>
  );
};

export default Landing;
