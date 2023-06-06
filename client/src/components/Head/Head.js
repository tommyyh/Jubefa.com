import React from 'react';
import { Helmet } from 'react-helmet';
import Logo from 'assets/icons/logo.svg';

const Head = ({ head, domain, thumbnail, lang, langCode, short }) => {
  return (
    <Helmet>
      <title>{head.title} · Jubefa GmbH</title>
      <meta name='description' content={head.desc} />
      <link
        rel='alternate'
        hreflang={langCode === 'en' ? 'de' : 'en'}
        href={domain}
      />
      <link rel='canonical' href={domain} />
      <meta property='og:title' content={`${head.title} · Jubefa`} />
      <meta property='og:description' content={head.shortDesc}></meta>
      <meta property='og:image' content={thumbnail} />
      <meta name='robots' content='index, follow' />

      <script type='application/ld+json'>
        {`
        {
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          "name": "${lang.general.company}",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "${lang.general.address}",
            "addressLocality": "${lang.general.city}",
            "postalCode": "${lang.general.postCode}",
            "addressCountry": "Germany"
          },
          "telephone": "${lang.general.tel}",
          "email": "${lang.general.email}",
          "url": "${lang.general.url}",
          "logo": ${Logo},
          "description": "${head.shortDesc}",
          "openingHours": "Mo-Fr 9:00-20:00, Sa 9:00-16:00",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "${lang.general.tel}",
            "contactType": "customer service",
            "availableLanguage": ["English", "German"]
          }
        }
        `}
      </script>

      <link rel='alternate' hreflang='en' href={head.enUrl} />
      <link rel='alternate' hreflang='de' href={head.deUrl} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='author' content={lang.general.author} />
      <meta name='datePublished' content='2023-03-11' />
      <meta name='dateModified' content='2023-03-12' />

      {/* Twitter */}
      <meta name='twitter:card' content={head.summary} />
      <meta
        name='twitter:site'
        content={lang.general.socials.twitter.username}
      />
      <meta name='twitter:title' content={`${head.title} · Jubefa`} />
      <meta name='twitter:description' content={head.desc} />
      <meta name='twitter:image' content={thumbnail} />
    </Helmet>
  );
};

export default Head;
