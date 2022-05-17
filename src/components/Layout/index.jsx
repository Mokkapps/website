import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

import messages from 'lang/messages';
import { LanguageContext } from 'context/languageContext';
import { ThemeContext } from 'context/themeContextProvider';

import Menu from 'components/Menu/DesktopMenu/DesktopMenu';
import BurgerMenu from 'components/Menu/MobileMenu/MobileMenu';
import BurgerMenuButton from 'components/Menu/MobileMenu/BurgerMenuButton';
import HeaderLogo from 'components/HeaderLogo';
import SocialLinks from 'components/SocialLink/SocialLinks';
import Footer from 'components/Footer';
import Seo from 'components/Seo';

const Layout = ({
  children,
  showSocialLinks = true,
  seo: { url, title, image, description, postSEO, canonical },
}) => {
  const [open, setOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);
  const devMode = process.env.NODE_ENV !== `production`;

  return (
    <IntlProvider
      locale={lang}
      messages={lang === 'en' ? messages.english : messages.german}
    >
      <section
        className={`${theme === 'light' ? 'theme-light' : 'theme-dark'} ${
          devMode ? 'debug-screens' : ''
        } flex flex-col min-h-100vh bg-background text-main-text relative overflow-hidden lg:overflow-visible lg:overflow-clip`}
      >
        <header className="bg-background lg:hidden flex justify-center sticky">
          <HeaderLogo />
        </header>
        <BurgerMenuButton className="lg:hidden" open={open} setOpen={setOpen} />
        <BurgerMenu className="lg:hidden" open={open} setOpen={setOpen} />
        <Menu className="hidden lg:flex" />
        {showSocialLinks ? (
          <section className="hidden xl:flex fixed left-5 bottom-5 z-200">
            <SocialLinks
              onlyFavorites
              asColumn
              largeIcons
              dataCy={'desktop-sidebar-social-links'}
            />
          </section>
        ) : null}
        <div className="md:pt-5 md:p-4 flex-grow">{children}</div>
        <Footer />
        <Seo
          url={url}
          title={title}
          description={description}
          image={image}
          canonical={canonical}
          postSEO={postSEO}
        />
      </section>
    </IntlProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showSocialLinks: PropTypes.bool,
  seo: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    canonical: PropTypes.string,
    postSEO: PropTypes.bool,
  }),
};

export default Layout;
