import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { User } from '@/entities/User';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleAdditionalInfoProps {
    className?: string;
    author?: User;
    createdAd?: string;
    canEdit?: boolean;
    views?: number;
    onEdit?: () => void;
}

export const ArticleAdditionalInfo = memo(
    (props: ArticleAdditionalInfoProps) => {
        const { className, author, createdAd, canEdit, views, onEdit } = props;
        const { t } = useTranslation('article');

        return (
            <VStack gap="32" className={className}>
                <HStack gap="8">
                    <Avatar src={author?.avatar} size={32} />
                    <Text text={author?.username} bold />
                    <Text text={createdAd} />
                </HStack>
                {canEdit && (
                    <Button onClick={onEdit}>{t('Redaktirovat')}</Button>
                )}
                <Text text={t('prosmotrov', { count: views })} />
            </VStack>
        );
    },
);
