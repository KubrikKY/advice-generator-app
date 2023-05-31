import { FC, useEffect } from 'react';
import './AdviceStyle.css';
import { useAdvice } from '../hook/useAdvice';

const AdviceWindow: FC = () => {
  const { advice, id, getAdviceHandler } = useAdvice();

  useEffect(() => {
    getAdviceHandler();
  }, [getAdviceHandler]);

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
