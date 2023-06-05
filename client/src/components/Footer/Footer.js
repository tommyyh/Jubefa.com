import React, { useState } from 'react';
import css from './footer.module.scss';
import { Link } from 'react-router-dom';
import Logo from 'assets/icons/logo.svg';
import Cta from 'components/Cta/Cta';
import checkSVG from 'assets/icons/check.svg';
import badge1PNG from 'assets/images/badge1.png';
import fscPNG from 'assets/icons/FSC.png';
import { post } from 'lib/axios';
import info from 'data/info.json';

const Footer = ({ lang, langCode, setContactOpen }) => {
  const l = lang.footer;
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [processing, setProcessing] = useState(false);

  const submitNewsletter = async () => {
    setProcessing(true);

    // Check if email format is valid
    const re = /\S+@\S+\.\S+/;

    if (!re.test(email)) {
      setProcessing(false);

      return setError(l.invalid);
    }

    const res = await post(`${info.api}/contact/subscribe/`, {
      email,
    });

    switch (res.data.status) {
      case 401:
        setError(l.taken);

        break;
      case 402:
        setError(l.error);

        break;
      case 400:
        setError(l.error);
        console.log(res.data);

        break;
      case 200:
        setSuccess(l.success);
        setEmail('');
        setTimeout(() => {
          setSuccess('');
        }, 5000);

        break;
    }

    setProcessing(false);
  };

  return (
    <footer className={css['footer']}>
      <div className={css['top']}>
        <div className={css['top-inner']}>
          <h3>{l.title}</h3>
          <Cta link={``} onClick={() => setContactOpen(true)} title={l.cta} />
        </div>
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
                  window.location.href = `mailto:kontakt@jubefa.com`;
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
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setError('')}
                  value={email}
                />
                <button
                  onClick={submitNewsletter}
                  disabled={processing}
                  className={processing ? css['btn-processing'] : ''}
                >
                  <img src={checkSVG} alt='check' />
                </button>
              </div>

              {error && <p className={css['error']}>{error}</p>}
              {success && <p className={css['success']}>{success}</p>}

              <div className={css['badges']}>
                <img src={fscPNG} alt='trust badge' />
                <img src={badge1PNG} alt='trust badge' />
              </div>
            </div>
          </div>

          <h4 className={css['copyright']}>{l.copyright}</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
