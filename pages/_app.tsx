import "../styles/index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

require("typeface-montserrat");

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
