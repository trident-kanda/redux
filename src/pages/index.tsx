import { useDispatch } from "react-redux";
import { useCounterState } from "../redux/selectors";
import counterSlice from "../redux/slice";

export default function Home() {
  const dispatch = useDispatch();
  const state = useCounterState().counter;

  const onClickIncrement = () => {
    dispatch(counterSlice.actions.incrementCounter(1));
  };

  const onClickDecrement = () => {
    dispatch(counterSlice.actions.decrementCounter(1));
  };
  return (
    <>
      <button onClick={onClickIncrement}>増やす</button>
      <button onClick={onClickDecrement}>減らす</button>
      <p>ねこが{state.count}匹いる</p>
    </>
  );
}
