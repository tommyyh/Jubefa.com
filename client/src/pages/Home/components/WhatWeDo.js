import React from 'react';
import css from './whatwedo.module.scss';
import JubefaM1 from 'assets/images/jubefaM1.svg';
import JubefaM2 from 'assets/images/jubefaM2.png';
import ConsultingM1 from 'assets/images/consultingM1.svg';
import ConsultingM2 from 'assets/images/consultingM2.png';

const WhatWeDo = ({ langCode, lang }) => {
  const l = lang.wwd;

  return (
    <section className={css['wwd']}>
      <h3>{l.sub}</h3>
      <h2>{l.title}</h2>
      <p>{l.text}</p>

      <div className={css['images']}>
        <div className={css['image']}>
          <img
            src={JubefaM1}
            className={css['image-desktop']}
            alt='jubefa preview desktop'
          />
          <img
            src={JubefaM2}
            alt='jubefa preview mobile'
            className={css['image-mobile']}
          />
        </div>

        <div className={`${css['image']} ${css['image2']}`}>
          <img
            src={ConsultingM1}
            className={css['image-desktop']}
            alt='jubefa preview desktop'
          />
          <img
            src={ConsultingM2}
            alt='jubefa preview mobile'
            className={css['image-mobile']}
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
