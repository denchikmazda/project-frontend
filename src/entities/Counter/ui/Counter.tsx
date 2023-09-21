import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

import { Button } from '@/shared/ui/Button';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useCounterValue();
    const { t } = useTranslation();
    const { decrement, increment, add } = useCounterActions();

    const handleDec = () => {
        decrement();
    };

    const handleInc = () => {
        increment();
    };

    const handleAdd = () => {
        add(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button onClick={handleAdd} data-testid="increment-btn5">
                {t('add5')}
            </Button>
            <Button onClick={handleInc} data-testid="increment-btn">
                {t('increment')}
            </Button>
            <Button onClick={handleDec} data-testid="decrement-btn">
                {t('decrement')}
            </Button>
        </div>
    );
};
