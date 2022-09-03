import React, { useReducer } from "react";

type StateType = { count: number };
const initialState: StateType = { count: 0 };

type ActionType = {
  type: "increment" | "decrement" | "reset";
};

// 下記のように型を指定することで、コードを書く際に提示してくれる
// 引数：StateType(stateが持つ値を「count」のみに設定) / ActionType("increment"と"decrement"の2パターンのみに設定)
// 戻り値：count or 値を持たない型(error) が返ってくるように設定
function reducer(state: StateType, action: ActionType): StateType | never {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error();
  }
}

function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  );
}

export default CounterWithReducer;
