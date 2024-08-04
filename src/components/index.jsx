import React from "react";
import { connect } from "react-redux";
import { decrement, increment, setStep } from "../store/slices/counterSlice";

function Counter({ dispatch, counter: { count, step } }) {
  const dec = () => {
    dispatch(decrement());
  };

  const inc = () => {
    dispatch(increment());
  };

  const changeStep = ({ target: { value } }) => {
    dispatch(setStep(Number(value)));
  };

  return (
    <div>
      <button onClick={dec}>-</button>
      {count}
      <button onClick={inc}>+</button>
      <div>
        <input type="number" value={step} onChange={changeStep} />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return state;
}

const withAccessToStore = connect(mapStateToProps);

export default withAccessToStore(Counter);
