import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Glavnaya stranica')}
        </div>
    );
};

export default MainPage;
