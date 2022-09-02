import React from "react";

<<<<<<< HEAD
interface AppProps {
  message: string;
}

const App = ({ message }: AppProps) => {
  return <div>{message}</div>;
=======
// Propsで受け取る型を指定
interface AppProps {
  message?: string;
}

const App: React.FC<AppProps> = ({ message }) => {
  return <div>{message}</div>;
};

// Propsで受け取る初期値の指定
App.defaultProps = {
  message: "Hello, defaultProps!",
>>>>>>> @{-1}
};

export default App;
