import React from 'react';
import Nav from '../Nav';
import { PageHeader } from 'antd';

function Header() {
  return (
    <header className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="Title"
        extra={[<Nav key="1" />]}
      ></PageHeader>
    </header>
  );
}

export default Header;
