import { ReactNode } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from 'src/theme';
import { Pos, Admin } from 'src/components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const Theme = (props: { children: ReactNode; title: string }) => {
    const { children, title } = props;
    const path = router.pathname.split('/');

    if (path[1] === 'admin') {
      return <Admin>{children}</Admin>;
    } else {
      return <Pos title={title}>{children}</Pos>;
    }
  };

  console.log(pageProps, 'console');

  return (
    <>
      <Head>
        <title>Semillero</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Theme title="Satelites Sociales">
          <Component {...pageProps} />
        </Theme>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
