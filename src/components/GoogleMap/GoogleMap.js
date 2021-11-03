import React from 'react';

function GoogleMap() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d906.6292889227897!2d36.2557374934781!3d50.00507933290915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0c437530fdd%3A0xedcc34b672cdbc6!2z0JvQtdGA0LzQvtC90YLQvtCy0YHQutCw0Y8g0YPQuy4sIDE3LCDQpdCw0YDRjNC60L7Qsiwg0KXQsNGA0YzQutC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNjEwMDA!5e0!3m2!1sru!2sua!4v1635944215818!5m2!1sru!2sua"
        width="600"
        height="450"
        style="border:0;"
        allowFullScreen="true"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default GoogleMap;
