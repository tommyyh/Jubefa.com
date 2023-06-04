import React from 'react';
import css from './whatwedo.module.scss';
import JubefaM1 from 'assets/images/jubefaM1.svg';
import JubefaM2 from 'assets/images/jubefaM2.png';
import ConsultingM1 from 'assets/images/consultingM1.svg';
import ConsultingM2 from 'assets/images/consultingM2.png';
import JubefaD1 from 'assets/images/jubefaD1.png';
import JubefaD2 from 'assets/images/jubefaD2.png';
import ConsultingD1 from 'assets/images/consultingD1.png';
import ConsultingD2 from 'assets/images/consultingD2.png';
import { useMediaQuery } from 'react-responsive';

const WhatWeDo = ({ langCode, lang }) => {
  const l = lang.wwd;
  const isDesktop = useMediaQuery({
    query: '(min-width: 1025px)',
  });

  return (
    <div className={css['cont']}>
      <section className={css['wwd']}>
        <div className={css['text']}>
          <div>
            <h3>{l.sub}</h3>
            <h2>{l.title}</h2>
          </div>
          <p>{l.text}</p>
        </div>

        <div className={css['images']}>
          <div className={css['image']}>
            <img
              src={isDesktop ? JubefaD1 : JubefaM1}
              className={css['image-desktop']}
              alt='jubefa preview desktop'
            />
            <img
              src={isDesktop ? JubefaD2 : JubefaM2}
              alt='jubefa preview mobile'
              className={css['image-mobile']}
            />
          </div>

          <div className={`${css['image']} ${css['image2']}`}>
            <img
              src={isDesktop ? ConsultingD1 : ConsultingM1}
              className={css['image-desktop']}
              alt='jubefa preview desktop'
            />
            <img
              src={isDesktop ? ConsultingD2 : ConsultingM2}
              alt='jubefa preview mobile'
              className={css['image-mobile']}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
