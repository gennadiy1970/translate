import 'antd/dist/antd.css';
import '../styles/globals.css';
import PageLayout from '../src/components/PageLayout';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const language = router.locale;
  const props = {language, ...pageProps}
  return (
      <PageLayout language={language}>
        <Component { ...props} />
      </PageLayout>
  );
}

export default MyApp;
