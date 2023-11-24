import type { EmotionCache } from "@emotion/react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";
import { fontFamily } from "fonts";
import type { AppProps as NextAppProps } from "next/app";
import { baseTheme } from "theme/base";
import createEmotionCache from "utils/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();
interface AppProps extends NextAppProps {
  emotionCache?: EmotionCache;
}

const App = (props: AppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={createTheme(baseTheme)}>
        <style jsx global>{`
          html {
            font-family: ${fontFamily};
          }
        `}</style>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
