import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const ForbiddenPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('Net dostupa')}
        </Page>
    );
};

export default ForbiddenPage;
