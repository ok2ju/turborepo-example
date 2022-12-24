import "../styles/globals.css";
// import "@te/core/styles.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { TooltipProvider } from "@radix-ui/react-tooltip";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TooltipProvider>
      <Component {...pageProps} />
    </TooltipProvider>
  );
}

export default appWithTranslation(MyApp);
