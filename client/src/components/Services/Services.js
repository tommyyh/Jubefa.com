import React from 'react';
import css from './services.module.scss';
import Service from './components/Service';
import service1IMG from 'assets/images/service1.png';
import service2IMG from 'assets/images/service2.png';
import service3IMG from 'assets/images/service3.png';
import service4IMG from 'assets/images/service4.png';
import { Link } from 'react-router-dom';
import arrowSVG from 'assets/icons/arrow.svg';

const Services = ({ langCode, lang }) => {
  const l = lang.services;

  return (
    <section className={css['services']}>
      <Service langCode={langCode} l={l.service1} img={service1IMG} />
      <Service langCode={langCode} l={l.service2} img={service2IMG} />
      <Service langCode={langCode} l={l.service3} img={service3IMG} />
      <Service langCode={langCode} l={l.service4} img={service4IMG} />
      <CTA langCode={langCode} l={l.service5} />
    </section>
  );
};

const CTA = ({ langCode, l }) => {
  return (
    <div className={css['cta']}>
      <h5 className={css['position']}>{l.position}</h5>
      <h3>{l.title}</h3>
      <p>{l.text}</p>

      <Link to={`/${langCode}/`} className={css['btn']}>
        <span>{l.cta}</span>
        <img src={arrowSVG} alt='chevron' />
      </Link>
    </div>
  );
};

export default Services;
