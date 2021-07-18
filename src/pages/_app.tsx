import { AppProps } from "next/dist/next-server/lib/router/router";
import { Provider } from "react-redux";
import "tailwindcss/tailwind.css";
import createStore from "../redux/createstore";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={createStore()}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
