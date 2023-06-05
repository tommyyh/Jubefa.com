import React, { useState, useRef, useEffect } from 'react';
import css from './links.module.scss';
import { Link, useNavigate } from 'react-router-dom';

const Links = ({ lang, langCode, url, setContactOpen }) => {
  const [langOpen, setLangOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();
  const l = lang.nav;

  useEffect(() => {
    // Click anywhere else to close language and services menu
    const clickAnywhere = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setLangOpen(false);
        setServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', clickAnywhere);

    return () => {
      document.removeEventListener('mousedown', clickAnywhere);
    };
  }, [ref]);

  return (
    <>
      <div className={css['main']}>
        <ul>
          <li>
            <Link to={`/${langCode}`}>{l.home}</Link>
          </li>
          <li className={css['services']}>
            <span onClick={() => setServicesOpen(!langOpen)}>{l.services}</span>

            {servicesOpen && (
              <div className={css['services-dropdown']} ref={ref}>
                <Link to={`/${langCode}`}>{l.servicesList.first}</Link>
                {/* <Link to={`/${langCode}`}>{l.servicesList.second}</Link>
                <Link to={`/${langCode}`}>{l.servicesList.third}</Link> */}
                <Link to={`/${langCode}/solar`}>{l.servicesList.forth}</Link>
              </div>
            )}
          </li>
          <li onClick={() => setContactOpen(true)}>{l.contact}</li>
        </ul>
      </div>

      <div className={css['aside']}>
        <ul>
          <li className={css['language-text']}>
            <span onClick={() => setLangOpen(!langOpen)}>
              {langCode.toUpperCase()}
            </span>

            {langOpen && (
              <div className={css['dropdown']} ref={ref}>
                <a href={`/en/${url}`}>English (EN)</a>
                <a href={`/de/${url}`}>Deutsch (DE)</a>
              </div>
            )}
          </li>
          <li
            onClick={() => {
              window.location.href = lang.footer.info.tel;
            }}
          >
            {lang.general.tel}
          </li>
          <li
            className={css['sell-cta-text']}
            onClick={() => setContactOpen(true)}
          >
            {l.cta}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Links;
