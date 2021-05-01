import Counter from '../components/Conter';
import { useAppDispatch, useAppSelector } from '../hooks/useSelector';
import { increment, decrement, increaseByNum } from '../modules/counter';

export function CounterContainer () {
    const count = useAppSelector(store => store.counter.count);
    const dispatch = useAppDispatch();

    const onIncrease = () => {
        dispatch(increment())
    }
    const onDecrease = () => {
        dispatch(decrement())
    }
    const onIncreaseBy = (diff: number) => {
        dispatch(increaseByNum(diff));
    }

    return (
        <div>
            <Counter 
                count={count}                
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                increaseBy={onIncreaseBy}
            />
        </div>
    );
}
