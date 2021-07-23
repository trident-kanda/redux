import { useDispatch } from "react-redux";
import { asyncIncrementCounter } from "../redux/asyncActions";
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
  const onClickAsyncIncrement = async () => {
    await dispatch(asyncIncrementCounter(10));
  };
  return (
    <>
      <button onClick={onClickIncrement}>増やす</button>
      <button onClick={onClickDecrement}>減らす</button>
      <button onClick={onClickAsyncIncrement} disabled={state.loading}>
        非同期で増やす
      </button>
      <p>ねこが{state.count}匹いる</p>
      {state.loading ? <p>通信中</p> : ""}
      {state.error ? (
        <p className=" text-red-500">問題が発生。{state.errorMessage}</p>
      ) : (
        ""
      )}
    </>
  );
}
