import 'antd/dist/antd.css';
import '../styles/globals.css';
import PageLayout from '../src/components/PageLayout';

function MyApp({ Component, pageProps }) {
  return (
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
  );
}

export default MyApp;
