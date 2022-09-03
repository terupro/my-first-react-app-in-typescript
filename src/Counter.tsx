import React, { useState, useRef, useEffect } from "react";

const Counter: React.FC<{}> = () => {
  const initialValue: any = 0;

  // useStateで扱う型を全て指定できる
  const [value, setValue] = useState<number>(initialValue);

  const increment = () => setValue((prevState) => prevState + 1);
  const decrement = () => setValue((prevState) => prevState - 1);

  // DOMを参照する
  const renderTimes = useRef<number>(0);

  // レンダリング時に実行する
  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  });

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {renderTimes.current} times!</div>
    </div>
  );
};

export default Counter;
