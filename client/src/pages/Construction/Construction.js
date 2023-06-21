import React, { useEffect, useState } from 'react';
import 'assets/scss/reset.scss';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import Loading from 'components/Loading/Loading';
import Navbar from 'components/Navbar/Navbar';
import Landing from './components/Landing';
import Footer from 'components/Footer/Footer';
import Contact from 'components/Contact/Contact';
import Head from 'components/Head/Head';
import solarThumbnailPNG from 'assets/images/solarThumbnail.png';
import WhatWeDo from './components/WhatWeDo';
import Services from './components/Services';
import Wwd from 'components/WhatWeDo/WhatWeDo';
import construction1PNG from 'assets/images/construction/construction1.png';
import construction2PNG from 'assets/images/construction/construction2.png';
import Historical from './components/Historical';
import Brownfield from './components/Brownfield';

const Construction = () => {
  const [loading, setLoading] = useState(true);
  const [contactOpen, setContactOpen] = useState(false);
  const lang = useSelector((state) => state.lang.value.lang.payload);
  const langCode = useSelector((state) => state.lang.value.langCode.payload);
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const isDesktop = useMediaQuery({
    query: '(min-width: 1025px)',
  });

  useEffect(() => {
    if (lang) {
      setLoading(false);
    }
  }, [lang]);

  if (loading) return <Loading />;

  const head = lang.headSolar;
  const domain = `${lang.general.domain}/${
    langCode === 'en' ? 'de' : 'en'
  }/solar`;

  return (
    <>
      <Head
        thumbnail={solarThumbnailPNG}
        head={head}
        lang={lang}
        domain={domain}
        langCode={langCode}
      />

      <Navbar lang={lang} langCode={langCode} setContactOpen={setContactOpen} />
      <Landing
        lang={lang}
        langCode={langCode}
        setContactOpen={setContactOpen}
      />
      <WhatWeDo
        lang={lang}
        langCode={langCode}
        setContactOpen={setContactOpen}
      />
      <Services
        lang={lang}
        langCode={langCode}
        setContactOpen={setContactOpen}
      />
      <Wwd
        lang={lang.construction.reconstruction}
        langCode={langCode}
        img1={construction1PNG}
        img2={construction2PNG}
        setContactOpen={setContactOpen}
      />
      <Historical
        lang={lang}
        langCode={langCode}
        setContactOpen={setContactOpen}
      />
      <Brownfield
        lang={lang}
        langCode={langCode}
        setContactOpen={setContactOpen}
      />
      <Footer lang={lang} langCode={langCode} setContactOpen={setContactOpen} />
      <Contact
        lang={lang}
        langCode={langCode}
        setContactOpen={setContactOpen}
        contactOpen={contactOpen}
      />
    </>
  );
};

export default Construction;
