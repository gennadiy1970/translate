import React from 'react';
import Image from 'next/image';
import { socialContact } from '../../data/socialContact';
import { Col } from 'antd';

function SocialMedia () {
  return (
    <>
      {socialContact.map(({ href, alt, src }) => (
        <Col span={6} key={href}>
          <a
            href={href}
            className="social-wrapper"
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

export default SocialMedia;