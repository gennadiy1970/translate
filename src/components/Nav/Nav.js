import React from 'react';
import Link from 'next/link';
import { Menu } from 'antd';
import {
  HomeOutlined,
  FormOutlined,
  ContainerOutlined,
  UsergroupAddOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import LanguageSelector from '../LanguageSelector';
const { SubMenu } = Menu;

function Nav() {
  return (
    <Menu mode="horizontal" className="header-bg">
      <Menu.Item key="/" icon={<HomeOutlined />}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </Menu.Item>

      <SubMenu key="SubMenu" icon={<FormOutlined />} title="Services">
        <Menu.Item key="/services/general">
          <Link href="/services/general">
            <a>General services</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="/services/types">
          <Link href="/services/types">
            <a>Translation types</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="/services/send-file">
          <Link href="/services/send-file">
            <a>Send file</a>
          </Link>
        </Menu.Item>
      </SubMenu>

      <Menu.Item key="/news" icon={<ContainerOutlined />}>
        <Link href="/">
          <a>News</a>
        </Link>
      </Menu.Item>

      <Menu.Item key="/for-translators" icon={<UsergroupAddOutlined />}>
        <Link href="/for-translators">
          <a>For Translators</a>
        </Link>
      </Menu.Item>

      <Menu.Item key="/about" icon={<InfoCircleOutlined />}>
        <Link href="/about">
          <a>About</a>
        </Link>
      </Menu.Item>

      <Menu.Item key="LanguageSelector"
        >
        <LanguageSelector  />
      </Menu.Item>
    </Menu>
  );
}

export default Nav;
