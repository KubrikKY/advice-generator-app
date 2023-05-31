import { FC, useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hook/hookRedux';
import './AdviceStyle.css';
import { getAdvice } from '../store/advice/adviceSlice';

const AdviceWindow: FC = () => {
  const [advice, id] = useAppSelector((state) => [
    state.advice.advice,
    state.advice.id,
  ]);
  const dispatch = useAppDispatch();

  const getAdviceHandler = useCallback(() => {
    dispatch(getAdvice());
  }, [dispatch]);

  useEffect(() => {
    getAdviceHandler();
  }, [dispatch, getAdviceHandler]);

  return (
    <div className="AdviceWindow">
      <h3>ADVICE #{id}</h3>
      <h2>{advice}</h2>
      <div className="Decor-Line"></div>
      <button onClick={getAdviceHandler} className="Button-Advice"></button>
    </div>
  );
};

export default AdviceWindow;
