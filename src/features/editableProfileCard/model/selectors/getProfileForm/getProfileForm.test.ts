import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should return profile form data', () => {
        const data = {
            first: 'denchik',
            last: 'mazda',
            username: 'denchikmazda1-2',
            age: 23,
            country: Country.Belarus,
            city: 'Minsk',
            currency: Currency.USD,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
