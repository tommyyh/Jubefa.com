import React from 'react';
import css from './whatwedo.module.scss';
import Cta from 'components/Cta/Cta';
import variablesJSON from 'data/variables/variables.json';

const WhatWeDo = ({ langCode, lang, img1, img2, reversed, setContactOpen }) => {
  const l = lang;

  return (
    <>
      <div className={css['cont']}>
        <section
          className={
            !reversed ? css['wwd'] : `${css['wwd']} ${css['wwd-reversed']}`
          }
        >
          <div className={css['inner']}>
            {reversed && (
              <div className={css['images']}>
                <img src={img1} alt='solar' />
                <img src={img2} alt='solar' />
              </div>
            )}

            <div>
              <h3>{l.sub}</h3>
              <h2>{l.title}</h2>
              <p>{l.text}</p>

              <Cta
                title={l.cta}
                link={``}
                onClick={() => setContactOpen(true)}
                color={variablesJSON.colors.accent2}
              />
            </div>

            {!reversed && (
              <div className={css['images']}>
                <img src={img1} alt='solar' />
                <img src={img2} alt='solar' />
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default WhatWeDo;
