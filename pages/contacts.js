import React from "react";
import { useRouter } from "next/router";
import locale from "../src/locales";
import Image from 'next/image';
import { Typography, Row, Col } from "antd";
const { Title, Paragraph } = Typography;
import contacrUs from '../public/contact-2794680_1920.png'
import smartphoneIcon from '../public/smartphone-1132677.svg'
import mailIcon from '../public/at-sign-1083508.svg'
import socialIcon from '../public/icon-2083456_640.png'
import SocialMedia from "../src/components/SocialMedia"

function Contacts() {
  const router = useRouter();
  const language = router.locale;
  const {
    h1,
    h3Adress,
    adress,
    h3WorkTime,
    workTime,
    h3phone,
    pPhone,
    phone,
    h3Mail,
    pMail,
    mail,
    h3Messengers,
    pMessangers,
    h3Socialnetworks,
  } = locale[language].contacts;

  return (
    <>
      <Row justify="center">
        <Col span={20} offset={1}>
          <div>
            <Image
              src={contacrUs}
              alt="Decorade image contacts"
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={6} offset={2}>
          <Typography>
            <Title>{h1}</Title>
            <Title level={3}>{h3Adress}</Title>
            <Paragraph>{adress}</Paragraph>
            <Title level={3}>{h3WorkTime}</Title>
            <Paragraph>{workTime}</Paragraph>
          </Typography>
        </Col>
      </Row>
      <Row justify="center">
        <Col align="center" span={6} offset={1}>
            <Image src={smartphoneIcon} alt={"image smartphone"} width='180' height='180'/>
            <Title level={3}>{h3phone}</Title>
            <Paragraph>{pPhone}</Paragraph>
            <Paragraph>{phone}</Paragraph>

        </Col>
        <Col align="center" span={6} offset={2}>
        <Image src={mailIcon} alt={"image mail"} width='180' height='180'/>
           <Title level={3}>{h3Mail}</Title>
            <Paragraph>{pMail}</Paragraph>
            <Paragraph>{mail}</Paragraph>
        </Col>
        <Col align="center" span={6} offset={2}>
        <Image src={socialIcon} alt={"image social"} width='180' height='180'/>
        <Title level={3}>{h3Socialnetworks}</Title>
            <Paragraph>{pMessangers}</Paragraph>
            <Row>
                <SocialMedia/>
            </Row>
           
        </Col>
      </Row>
    </>
  );
}

export default Contacts;
