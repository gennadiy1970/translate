import React from 'react';
import locale from '../src/locales';
import { Typography, Divider, Row, Col, BackTop } from 'antd';
const { Title, Paragraph } = Typography;
import Vendors from '../src/components/Vendors';

function About({language='uk'}) {
  const { h1, p1, p2, p3, h2 } = locale[language].about;

  return (
    <>
      <Row justify="center">
        <Col xs={20} sm={18} md={16} lg={14} xl={12}>
          <Typography>
            <Title className="text-center">{h1}</Title>
            <Paragraph>{p1}</Paragraph>
            <Paragraph>{p2}</Paragraph>
            <Paragraph>{p3}</Paragraph>
            <Divider />
          </Typography>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={20} sm={18} md={16} lg={14} xl={12}>
          <Typography>
            <Title level={2} className="text-center">{h2}</Title>
          </Typography>
          <Row justify="center" align="middle">
            <Vendors />
          </Row>
        </Col>
        <BackTop />
      </Row>
    </>
  );
}

export default About;
