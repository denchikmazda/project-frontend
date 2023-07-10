import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

type ActionCratorType<Return, Arg, RejecteValue>
    = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejecteValue;}>

export class TestAsyncThunk<Return, Arg, RejecteValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreator: ActionCratorType<Return, Arg, RejecteValue>;

    constructor(actionCreator: ActionCratorType<Return, Arg, RejecteValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined);

        return result;
    }
}
