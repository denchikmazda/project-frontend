import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('O saite')}
        </div>
    );
};

export default AboutPage;
