import { Outlet } from "react-router-dom";
import { useCounter } from "../hooks/useCounter";

export const HomePage = () => {
  const { count, handleAdd, handleSubstract, handleReset } = useCounter();

  return (
    <div>
      <h1>HomePage</h1>
      <h2>Counter</h2>
      <h2>The count is: {count}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubstract}>Substract</button>
      <button onClick={handleReset}>Reset</button>
      <Outlet />
    </div>
  );
};
