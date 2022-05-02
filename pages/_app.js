import "../styles/globals.css";

import { HomeContext } from "../contexts/homecontext";
import AppLayout from "../layout/appLayout";
function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
