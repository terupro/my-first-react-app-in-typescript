import React from "react";
import Counter from "./Counter";

interface AppProps {
  message?: string;
}

const App: React.FC<AppProps> = ({ message }) => {
  return (
    <div>
      <Counter />
    </div>
  );
};

// Propsで受け取る初期値の指定
App.defaultProps = {
  message: "Hello, defaultProps!",
};

export default App;
