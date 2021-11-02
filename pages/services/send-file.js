import React from 'react'
import { useRouter } from 'next/router';
import locale from '../../src/locales';

function SendFile() {
    const router = useRouter();
    const {locale: language } = router;
    return (
        <div>
            SendFile
            <h3>{locale[language].title}</h3>
        </div>
    )
}

export default SendFile;
