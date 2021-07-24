import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { asyncIncrementCounter } from "./asyncActions";

export type CounterState = {
  count: number;
  loading: boolean;
  error: boolean;
  errorMessage: string;
};

export const initialState: CounterState = {
  count: 0,
  loading: false,
  error: false,
  errorMessage: "",
};
//Slice:state/Reducer/Action Createのまとまり
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //action分プラスするReducer
    incrementCounter: (state, action: PayloadAction<number>) => ({
      ...state,
      count: state.count + action.payload,
    }),
    //action分マイナスするReducer
    decrementCounter: (state, action: PayloadAction<number>) => ({
      ...state,
      count: state.count - action.payload,
    }),
  },
  //別のSliceで生成されたActionに反応する場合
  extraReducers: (builder) => {
    builder.addCase(asyncIncrementCounter.pending, (state) => {
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: "",
      };
    });
    builder.addCase(asyncIncrementCounter.rejected, (state, action) => {
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: "",
      };
    });
    builder.addCase(
      asyncIncrementCounter.fulfilled,
      (state, action: PayloadAction<number>) => {
        return {
          ...state,
          count: state.count + action.payload,
          loading: false,
          error: false,
          errorMessage: "",
        };
      }
    );
  },
});

export default counterSlice;
