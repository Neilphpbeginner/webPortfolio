import "../styles/globals.css";
import { ThemeProvider } from "@material-ui/core";
import theme from "../src/MaterialUI Theme/theme";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-L2VS7L8PKX"
      ></Script>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
