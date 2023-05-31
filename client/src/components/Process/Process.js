import React, { useState } from 'react';
import css from './process.module.scss';
import ProcessImg from 'assets/images/process.png';

const Process = ({ langCode, lang }) => {
  const [active, setActive] = useState(1);
  const l = lang;

  return (
    <section className={css['process']}>
      <h3>{l.sub}</h3>
      <h2>{l.title}</h2>
      <p>{l.text}</p>

      <div className={css['bar']}>
        <ul>
          <li
            className={
              active === 1 ? `${css['active']} ${css['btn']}` : css['btn']
            }
            onClick={() => setActive(1)}
          >
            {l.process1.title}
          </li>
          <li
            className={
              active === 2 ? `${css['active']} ${css['btn']}` : css['btn']
            }
            onClick={() => setActive(2)}
          >
            {l.process2.title}
          </li>
          <li
            className={
              active === 3 ? `${css['active']} ${css['btn']}` : css['btn']
            }
            onClick={() => setActive(3)}
          >
            {l.process3.title}
          </li>
          <li
            className={
              active === 4 ? `${css['active']} ${css['btn']}` : css['btn']
            }
            onClick={() => setActive(4)}
          >
            {l.process4.title}
          </li>
        </ul>
      </div>

      <div className={css['detail']}>
        <img src={ProcessImg} alt='process' />

        {active === 1 && (
          <>
            <h4>{l.process1.title}</h4>
            <p>{l.process1.text}</p>
          </>
        )}

        {active === 2 && (
          <>
            <h4>{l.process2.title}</h4>
            <p>{l.process2.text}</p>
          </>
        )}

        {active === 3 && (
          <>
            <h4>{l.process3.title}</h4>
            <p>{l.process3.text}</p>
          </>
        )}

        {active === 4 && (
          <>
            <h4>{l.process4.title}</h4>
            <p>{l.process4.text}</p>
          </>
        )}
      </div>
    </section>
  );
};

export default Process;
