import React from 'react';
import css from './services.module.scss';
import { Link } from 'react-router-dom';

const Services = ({ setServicesOpen, servicesOpen, lang, langCode }) => {
  const l = lang.nav;

  return (
    <div
      className={servicesOpen ? `${css['menu']} ${css['open']}` : css['menu']}
    >
      <div
        className={
          servicesOpen
            ? `${css['menu-content']} ${css['menu-content-visible']}`
            : css['menu-content']
        }
      >
        <div>
          <div className={css['top']}>
            <svg
              width='7'
              height='11'
              viewBox='0 0 7 11'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0_278_221)'>
                <path
                  d='M1.46509 9.34514L5.224 5.6528L1.46509 1.96046'
                  stroke='#000'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </g>
              <defs>
                <clipPath id='clip0_278_221'>
                  <rect width='7' height='11' fill='#000' />
                </clipPath>
              </defs>
            </svg>
            <h5 onClick={() => setServicesOpen(false)}>{l.close}</h5>
          </div>

          <ul className={css['links']}>
            <li>
              <Link to={`/${langCode}`}>{l.servicesList.first}</Link>
            </li>
            {/* <li>
              <Link to={`/${langCode}`}>{l.servicesList.second}</Link>
            </li>
            <li>
              <Link to={`/${langCode}`}>{l.servicesList.third}</Link>
            </li> */}
            <li>
              <Link to={`/${langCode}/solar`}>{l.servicesList.forth}</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
