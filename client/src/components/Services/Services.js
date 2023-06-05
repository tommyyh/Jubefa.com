import React, { useEffect, useRef, useState } from 'react';
import css from './services.module.scss';
import Service from './components/Service';
import service1IMG from 'assets/images/service1.png';
import service2IMG from 'assets/images/service2.png';
import service3IMG from 'assets/images/service3.png';
import service4IMG from 'assets/images/service4.png';
import { Link } from 'react-router-dom';
import arrowSVG from 'assets/icons/arrow.svg';
import { setLangCode } from 'features/langSlice';

const Services = ({ langCode, lang, isDesktop, setContactOpen }) => {
  const l = lang.services;
  const scrollableRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [prevX, setPrevX] = useState(0);

  useEffect(() => {
    if (!isDesktop) return;

    const scrollableDiv = scrollableRef.current;

    const handleMouseDown = (event) => {
      setIsDragging(true);
      setPrevX(event.clientX);
      event.preventDefault();
    };

    const handleMouseMove = (event) => {
      if (isDragging) {
        const deltaX = event.clientX - prevX;
        scrollableDiv.scrollLeft -= deltaX;
        setPrevX(event.clientX);
        event.preventDefault();
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    scrollableDiv.addEventListener('mousedown', handleMouseDown);
    scrollableDiv.addEventListener('mousemove', handleMouseMove);
    scrollableDiv.addEventListener('mouseup', handleMouseUp);

    return () => {
      scrollableDiv.removeEventListener('mousedown', handleMouseDown);
      scrollableDiv.removeEventListener('mousemove', handleMouseMove);
      scrollableDiv.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, prevX]);

  return (
    <div className={css['cont']}>
      <section className={css['services']} ref={scrollableRef}>
        <Service
          langCode={langCode}
          l={l.service1}
          link={`/${langCode}`}
          img={service1IMG}
        />
        <Service langCode={langCode} l={l.service2} img={service2IMG} />
        <Service langCode={langCode} l={l.service3} img={service3IMG} />
        <Service
          langCode={langCode}
          l={l.service4}
          link={`/${langCode}/solar`}
          img={service4IMG}
        />
        <CTA
          langCode={langCode}
          l={l.service5}
          setContactOpen={setContactOpen}
        />
      </section>
    </div>
  );
};

const CTA = ({ langCode, l, setContactOpen }) => {
  return (
    <div className={css['cta']}>
      <h5 className={css['position']}>{l.position}</h5>
      <h3>{l.title}</h3>
      <p>{l.text}</p>

      <div className={css['btn']} onClick={() => setContactOpen(true)}>
        <span>{l.cta}</span>
        <img src={arrowSVG} alt='chevron' />
      </div>
    </div>
  );
};

export default Services;
