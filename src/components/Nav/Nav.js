import React from 'react';
import Link from 'next/link';
import { Menu } from 'antd';
import {
  HomeOutlined,
  FormOutlined,
  ContactsOutlined,
  ContainerOutlined,
  UsergroupAddOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import locale from '../../locales';


const { SubMenu } = Menu;

function Nav({language = 'uk'}) {
  const { home, services, gs, tt, sf, contacts, news, ft, about } = locale[language].nav;
  return (
    <Menu mode="horizontal" className="header-bg">
      <Menu.Item key="/" icon={<HomeOutlined />}>
        <Link href="/">
          <a>{home}</a>
        </Link>
      </Menu.Item>

      <SubMenu key="SubMenu" icon={<FormOutlined />} title={services}>
        <Menu.Item key="/services/general">
          <Link href="/services/general">
            <a>{gs}</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="/services/types">
          <Link href="/services/types">
            <a>{tt}</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="/services/send-file">
          <Link href="/services/send-file">
            <a>{sf}</a>
          </Link>
        </Menu.Item>
      </SubMenu>

      <Menu.Item key="/news" icon={<ContainerOutlined />}>
        <Link href="/">
          <a>{news}</a>
        </Link>
      </Menu.Item>

      <Menu.Item key="/contacts" icon={<ContactsOutlined />}>
        <Link href="/contacts">
          <a>{contacts}</a>
        </Link>
      </Menu.Item>

      <Menu.Item key="/for-translators" icon={<UsergroupAddOutlined />}>
        <Link href="/for-translators">
          <a>{ft}</a>
        </Link>
      </Menu.Item>

      <Menu.Item key="/about" icon={<InfoCircleOutlined />}>
        <Link href="/about">
          <a>{about}</a>
        </Link>
      </Menu.Item>
    </Menu>
  );
}

export default Nav;
