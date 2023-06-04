import React from 'react';
import css from './illustration.module.scss';
import Cta from 'components/Cta/Cta';
import mobileIllSVG from 'assets/icons/mobile_illustration.svg';
import desktopIll1SVG from 'assets/images/desktopIllustration1.png';
import desktopIll2SVG from 'assets/images/desktopIllustration2.png';
import { useMediaQuery } from 'react-responsive';

const Illustration = ({ langCode, lang: l }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const isDesktop = useMediaQuery({
    query: '(min-width: 1025px)',
  });

  return (
    <div className={css['cont']}>
      <section className={css['illustration']}>
        <div className={css['content']}>
          <h3>{l.sub}</h3>
          <h2>{l.title}</h2>
          <p>{l.text}</p>

          <Cta link={`/${langCode}/`} title={l.cta} />
        </div>

        {/* Illustration */}
        {isMobile && (
          <img
            src={mobileIllSVG}
            className={css['graph']}
            alt='graph illustration'
          />
        )}

        {isDesktop && (
          <div className={css['img-cont']}>
            <img
              src={desktopIll1SVG}
              className={css['graph1']}
              alt='graph illustration'
            />
            <img
              src={desktopIll2SVG}
              className={css['graph2']}
              alt='graph illustration'
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default Illustration;
