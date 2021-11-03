import React from 'react';
import { Layout, Row, Col } from 'antd';
const { Header, Content, Footer } = Layout;
import Image from 'next/image';
import logo from '../../../public/Logo.png';
import Nav from '../Nav';

function PageLayout({ children }) {
  return (
    <Layout className="layout">
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Row >
          <Col span={4}>
            <div className="logo" style={{ padding: '4px' }}>
              <Image
                src={logo}
                height="58"
                width="58"
                alt="'Eurasia' Translation Agency"
              />
            </div>
          </Col>
          <Col span={20}>
            <Row>
              <Col >
                <Nav />
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content"> {children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>GGM&amp;MIM ©2021</Footer>
    </Layout>
  );
}

export default PageLayout;
