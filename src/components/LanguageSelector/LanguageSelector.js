import React from 'react';
import { useRouter } from 'next/router';
import { Select } from 'antd';
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
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="en">English</Option>
        <Option value="uk">Українська</Option>
        <Option value="ru">Русский</Option>
      </Select>
    </>
  );
}

export default LanguageSelector;
