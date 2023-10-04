import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Country } from '../../model/types/country';

import { ListBox } from '@/shared/ui/deprecated/Popus';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Georgia, content: Country.Georgia },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo(
    ({ className, value, onChange, readonly }: CountrySelectProps) => {
        const { t } = useTranslation('profile');

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Country);
            },
            [onChange],
        );

        return (
            <ListBox
                onChange={onChangeHandler}
                value={value}
                defaultValue={t('Ukazhite stranu')}
                label={t('Ukazhite stranu')}
                items={options}
                readonly={readonly}
                direction="top right"
            />
        );
    },
);
