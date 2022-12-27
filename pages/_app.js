import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import App from 'next/app';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
