import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import 'react-datepicker/dist/react-datepicker.css';
// import 'react-tabs/style/react-tabs.css';

import { wrapper, store } from '../store/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
