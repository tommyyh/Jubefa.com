import React from 'react';
import css from './service.module.scss';
import { Link } from 'react-router-dom';

const Service = ({ langCode, l, img }) => {
  return (
    <div className={css['service']}>
      <div>
        <div className={css['top']}>
          <h3>{l.title}</h3>

          <Link to={`/${langCode}/`} className={css['cta']}>
            <svg
              viewBox='0 0 7 11'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className={css['cta-arrow']}
            >
              <g clip-path='url(#clip0_278_221)'>
                <path
                  d='M1.46509 9.34514L5.224 5.6528L1.46509 1.96046'
                  stroke-linecap='round'
                />
              </g>
              <defs>
                <clipPath id='clip0_278_221'>
                  <rect width='7' height='11' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>

        <ul>
          <li>{l.points[1]}</li>
          <li>{l.points[2]}</li>
          <li>{l.points[3]}</li>
          <li>{l.points[4]}</li>
        </ul>
      </div>

      <h5 className={css['position']}>{l.position}</h5>

      <img src={img} alt='illustration' className={css['illustration']} />
    </div>
  );
};

export default Service;
