import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootStoreType } from '../types/types';

export const useAppDispatch = () => useDispatch<DispatchType>();
export const useAppSelector: TypedUseSelectorHook<RootStoreType> = useSelector;
