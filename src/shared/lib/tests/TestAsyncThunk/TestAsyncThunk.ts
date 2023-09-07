import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';
import { StateSchema } from '@/app/providers/StoreProvider';

type ActionCratorType<Return, Arg, RejecteValue>
    = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejecteValue;}>

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Return, Arg, RejecteValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreator: ActionCratorType<Return, Arg, RejecteValue>;

    api: jest.MockedFunctionDeep<AxiosStatic>;

    navigate: jest.MockedFn<any>;

    constructor(
        actionCreator: ActionCratorType<Return, Arg, RejecteValue>,
        state?: DeepPartial<StateSchema>,
    ) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as StateSchema);

        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(
            this.dispatch,
            this.getState,
            { api: this.api, navigate: this.navigate },
        );

        return result;
    }
}
