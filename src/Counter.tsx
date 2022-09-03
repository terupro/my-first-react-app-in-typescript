import React, { useState } from "react";

const Counter: React.FC<{}> = () => {
  const initialValue: any = 0;

  // useStateで扱う型を全て指定できる
  const [value, setValue] = useState<number>(initialValue);

  const increment = () => setValue((prevState) => prevState + 1);
  const decrement = () => setValue((prevState) => prevState - 1);

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

export default Counter;
