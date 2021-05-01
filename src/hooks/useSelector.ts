import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../modules/index';

export const useAppDispatch = () => useDispatch();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
