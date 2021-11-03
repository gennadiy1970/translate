import React from 'react';
import { useRouter } from 'next/router';
import { Select } from 'antd';
import Image from 'next/image';
import ru from '../../../public/ru.svg';
import uk from '../../../public/uk.svg';
import gb from '../../../public/gb.svg';
const { Option } = Select;

function LanguageSelector() {
  const router = useRouter();
  const locale = router.locale;
  const route = router.route;

  const handleChange = (value) => {
    if (value !== locale) {
      router.push(route, route, { locale: value });
    }
  };

  return (
    <>
      <Select
        defaultValue={locale}
        style={{ width: 80, position: 'relative', top: 14 }}
        bordered={false}
        onChange={handleChange}
      >
        <Option value="uk">
          <Image
            src={uk}
            alt="Українська"
            className="image-fit"
            width={50}
            height={50}
          />
        </Option>
        <Option value="en">
          <Image
            src={gb}
            alt="English"
            className="image-fit"
            width={50}
            height={50}
          />
        </Option>{' '}
        <Option value="ru">
          <Image
            src={ru}
            alt="Русский"
            className="image-fit"
            width={50}
            height={50}
          />
        </Option>
      </Select>
    </>
  );
}

export default LanguageSelector;
