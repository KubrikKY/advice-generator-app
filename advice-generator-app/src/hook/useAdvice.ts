import { useCallback } from 'react';
import { getAdvice } from '../store/advice/adviceSlice';
import { useAppDispatch, useAppSelector } from '../store/hook/hookRedux';

const useAdvice = () => {
  const [advice, id] = useAppSelector((state) => [
    state.advice.advice,
    state.advice.id,
  ]);
  const dispatch = useAppDispatch();

  const getAdviceHandler = useCallback(() => {
    dispatch(getAdvice());
  }, [dispatch]);

  return { advice, id, getAdviceHandler };
};

export { useAdvice };
