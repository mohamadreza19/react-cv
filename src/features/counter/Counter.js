import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  function onClick_increment() {
    dispatch(increment());
  }
  function onClick_decrement() {
    dispatch(decrement());
  }
  console.log("ddd");
  return (
    <div>
      {count}
      <br />
      <button onClick={onClick_increment}>+</button>
      <button onClick={onClick_decrement}>-</button>
    </div>
  );
};

export default Counter;
