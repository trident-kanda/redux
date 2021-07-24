import { useDispatch } from "react-redux";
import { asyncIncrementCounter } from "../redux/asyncActions";
import { useCounterState } from "../redux/selectors";
import counterSlice from "../redux/slice";

export default function Home() {
  // dispatch：stateの変更をする際に利用
  // Actionを経由してstateの変更を行う
  const dispatch = useDispatch();
  const state = useCounterState().counter;
  //クリックでカウントを増やす
  const onClickIncrement = () => {
    dispatch(counterSlice.actions.incrementCounter(1));
  };
  //クリックでカウントを減らす
  const onClickDecrement = () => {
    dispatch(counterSlice.actions.decrementCounter(1));
  };
  //非同期でカウント10増やす
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
