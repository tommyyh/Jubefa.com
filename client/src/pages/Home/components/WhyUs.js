import React from 'react';
import css from './whyus.module.scss';
import Why1SVG from 'assets/icons/why1.svg';
import Why2SVG from 'assets/icons/why2.svg';
import Why3SVG from 'assets/icons/why3.svg';
import Why4SVG from 'assets/icons/why4.svg';

const WhyUs = ({ langCode, lang }) => {
  const l = lang.why;

  return (
    <div className={css['cont']}>
      <section className={css['why']}>
        <h3>{l.sub}</h3>
        <h2>{l.title}</h2>

        <div className={css['reasons']}>
          <Reason img={Why1SVG} title={l.why1.title} text={l.why1.text} />
          <Reason img={Why2SVG} title={l.why2.title} text={l.why2.text} />
          <Reason img={Why3SVG} title={l.why3.title} text={l.why3.text} />
          <Reason img={Why4SVG} title={l.why4.title} text={l.why4.text} />
        </div>
      </section>
    </div>
  );
};

const Reason = ({ img, title, text }) => {
  return (
    <div className={css['reason']}>
      <img src={img} alt='illustration' />

      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default WhyUs;
