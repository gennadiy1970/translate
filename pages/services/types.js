import React from 'react'
import { useRouter } from 'next/router';
import locale from '../../src/locales';

function Types() {
    const router = useRouter();
    const {locale: language } = router;
    return (
        <div>
            Types
            <h3>{locale[language].title}</h3>
        </div>
    )
}

export default Types;
