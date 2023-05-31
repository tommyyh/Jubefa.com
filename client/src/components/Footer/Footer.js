import React from 'react';
import css from './footer.module.scss';
import { Link } from 'react-router-dom';
import Logo from 'assets/icons/logo.svg';
import Cta from 'components/Cta/Cta';
import checkSVG from 'assets/icons/check.svg';
import badge1PNG from 'assets/images/badge1.png';

const Footer = ({ lang, langCode }) => {
  const l = lang.footer;

  return (
    <footer className={css['footer']}>
      <div className={css['top']}>
        <h3>{l.title}</h3>
        <Cta link={`/${langCode}`} title={l.cta} />
      </div>

      <div className={css['cont']}>
        <div className={css['main']}>
          <div className={css['title']}>
            <img src={Logo} alt='logo' />
            <Link to={`/${langCode}`}>
              {lang.general.company.toUpperCase()}
            </Link>
          </div>

          <div className={css['main-content']}>
            <ul className={css['links']}>
              <li>
                <Link to={`/${langCode}`}>{l.links.link1}</Link>
              </li>
              <li>
                <Link to={`/${langCode}`}>{l.links.link2}</Link>
              </li>
              <li>{l.links.link3}</li>
              <li>
                <Link to={`/${langCode}`}>{l.links.link4}</Link>
              </li>
              <li>
                <Link to={`/${langCode}`}>{l.links.link5}</Link>
              </li>
              <li>
                <Link to={`/${langCode}`}>{l.links.link6}</Link>
              </li>
            </ul>

            <ul className={css['info']}>
              <li
                onClick={() => {
                  window.location.href = `mailto:info@jubefa.com`;
                }}
              >
                {l.info.email}
              </li>
              <li
                onClick={() => {
                  window.location.href = l.info.tel;
                }}
              >
                {l.info.tel}
              </li>
            </ul>

            <div className={css['newsletter']}>
              <h5>{l.newsletter.title}</h5>

              <div className={css['form']}>
                <input
                  type='email'
                  name='email'
                  placeholder={l.newsletter.email}
                />
                <button>
                  <img src={checkSVG} alt='check' />
                </button>
              </div>
            </div>

            <div className={css['badges']}>
              <img src={badge1PNG} alt='trust badge' />
              <img src={badge1PNG} alt='trust badge' />
            </div>
          </div>

          <h4 className={css['copyright']}>{l.copyright}</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
