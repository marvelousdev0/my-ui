import React, { useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { routes } from 'utils/routes';
import { ThemeWrapper, myTheme } from './theme';
import Layout from './components/Layout';
import { setCurrentOs, setCurrentBrowser } from 'store/global/env';

function App() {
  const dispatch = useDispatch();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(() => myTheme(prefersDarkMode ? 'dark' : 'light'), [prefersDarkMode]);

  const { i18n } = useTranslation();
  const [lng, setLng] = React.useState('en');

  useEffect(() => {
    i18n.changeLanguage('en');

    const userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os = null;

    function getOsName() {
      let osName = undefined;
      if (windowsPlatforms.indexOf(platform) !== -1) osName = 'Windows';
      else if (macosPlatforms.indexOf(platform) !== -1) osName = 'MacOS';
      else if (iosPlatforms.indexOf(platform) !== -1) osName = 'iOS';
      else if (/Android/.test(userAgent)) osName = 'Android';
      else if (!os && /Linux/.test(platform)) osName = 'Linux';
      dispatch(setCurrentOs(osName));
    }

    getOsName();

    function getBrowserName() {
      let browser = undefined;
      if (document.documentMode) browser = 'IE';
      if (!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)) browser = 'Chrome';
      dispatch(setCurrentBrowser(browser));
    }

    getBrowserName();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLng(lng);
  };

  return (
    <ThemeWrapper theme={theme}>
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Layout lng={lng} changeLanguage={changeLanguage}>
          {routes}
        </Layout>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          closeButton={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
    </ThemeWrapper>
  );
}

export default App;
