import React from 'react';
import Image from 'next/image';
import { vendors } from '../../data/vendors';
import { Col } from 'antd';

function Vendors() {
  return (
    <>
      {vendors.map(({ href, alt, src }) => (
        <Col span={8} key={href}>
          <a
            href={href}
            className="image-wrapper"
            target="_blank"
            rel="noopener nofollow noreferrer"
          >
            <Image src={src} alt={alt} className="image-fit" />
          </a>
        </Col>
      ))}
    </>
  );
}

export default Vendors;
