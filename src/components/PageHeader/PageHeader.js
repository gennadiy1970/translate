import React from 'react';
import Nav from '../Nav';
import { Layout, Row, Col } from 'antd';
import Image from 'next/image';
import logo from '../../../public/Logo.png';
import LanguageSelector from '../LanguageSelector';
const { Header } = Layout;

function PageHeader({language}) {
  return (
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
      <Col span={18}>
        <Row>
          <Col >
            <Nav language={language} />
          </Col>
        </Row>
      </Col>
      <Col span={2}>
        <Row>
          <Col >
            <LanguageSelector  />
          </Col>
        </Row>
      </Col>
    </Row>
  </Header>
  );
}

export default PageHeader;

// <header   className="site-page-header-ghost-wrapper">

// </header>
//   <PageHeader
//     ghost={false}
//     onBack={() => window.history.back()}
//     title="Title"
//     extra={[<Nav key="1" />]}
//   ></PageHeader>
