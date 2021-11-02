import React from 'react';
import { useRouter } from 'next/router';
import locale from '../src/locales';
import { Button, Space, DatePicker, Card } from 'antd';
import { CiCircleFilled } from '@ant-design/icons';

function About() {
  const router = useRouter();
  const language = router.locale;
  const onChange = e => {
    console.log(e);
  }
  return (
    <div>
      <h1>About</h1>
      {locale[language].title}
      <div style={{ padding: 100 }}>
      <Space direction="vertical">
        <Button type="primary">Primary Button</Button>
        <Button type="ghost">Ghost Button</Button>
        <DatePicker onChange={onChange} />
        <CiCircleFilled />
      </Space>
    </div>
    </div>
  );
}

export default About;
