import React, { useEffect, useState } from 'react';
import 'assets/scss/reset.scss';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import Loading from 'components/Loading/Loading';
import Navbar from 'components/Navbar/Navbar';
import Landing from './components/Landing';
import Services from 'components/Services/Services';
import Illustration from 'components/Illustration/Illustration';
import WhatWeDo from './components/WhatWeDo';
import Process from 'components/Process/Process';
import WhyUs from './components/WhyUs';
import Reviews from 'components/Reviews/Reviews';
import Footer from 'components/Footer/Footer';
import Contact from 'components/Contact/Contact';

const Home = () => {
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

  return (
    <>
      <Navbar lang={lang} langCode={langCode} setContactOpen={setContactOpen} />
      <Landing
        lang={lang}
        langCode={langCode}
        setContactOpen={setContactOpen}
      />
      <Services
        lang={lang}
        langCode={langCode}
        isDesktop={isDesktop}
        setContactOpen={setContactOpen}
      />
      <Illustration
        lang={lang.profit}
        langCode={langCode}
        setContactOpen={setContactOpen}
      />
      <WhatWeDo lang={lang} langCode={langCode} />
      <Process lang={lang.process} langCode={langCode} isDesktop={isDesktop} />
      <WhyUs lang={lang} langCode={langCode} />
      <Reviews
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

export default Home;
