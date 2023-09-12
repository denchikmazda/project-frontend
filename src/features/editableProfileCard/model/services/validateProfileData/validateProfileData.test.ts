import { ValidateProfileError } from '../../consts/consts';

import { validateProfileData } from './validateProfileData';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

const data = {
    first: 'denchik',
    last: 'mazda',
    username: 'denchikmazda1-2',
    age: 23,
    country: Country.Belarus,
    city: 'Minsk',
    currency: Currency.USD,
};

describe('validateProfileData.test', () => {
    test('success', () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });

    test('without first and lastname', () => {
        const result = validateProfileData({ ...data, first: '', last: '' });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });

    test('incorrect age', () => {
        const result = validateProfileData({ ...data, age: undefined });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });

    test('incorrect country', () => {
        const result = validateProfileData({ ...data, country: undefined });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });

    test('incorrect all', () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
