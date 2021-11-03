import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from 'antd';
const { Content, Footer } = Layout;
import PageHeader from '../PageHeader';

function PageLayout({ children }) {
  const router = useRouter();
  const language = router.locale;
  return (
    <Layout className="layout">
      <PageHeader language={language}/>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content"> {children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>GGM&amp;MIM ©2021</Footer>
    </Layout>
  );
}

export default PageLayout;
