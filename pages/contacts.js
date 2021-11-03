import React from 'react';
import GoogleMap from '../src/components/GoogleMap';
import { useRouter } from 'next/router';
function Contacts() {
  const router = useRouter();
  return (
    <div>
      Contacts const router = useRouter();
      <pre> {JSON.stringify(router, null, 4)}</pre>
      {/* <GoogleMap /> */}
    </div>
  );
}

export default Contacts;
