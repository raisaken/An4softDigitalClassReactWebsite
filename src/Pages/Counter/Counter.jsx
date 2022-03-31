import { connect } from "react-redux";

import { increment, decrement } from "../../Redux/Actions/CounterAction";

import React from "react";

const mapstatetoprops = (state) => {
  console.log("state:", state);
  return {
    initialCount: state.counter.initialCount,
  };
};

const mapdispatchtoprops = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};

function Counter(props) {
  return (
    <div>
      <p>Count:{props.initialCount}</p>
      <button
        onClick={() => {
          props.increment();
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          props.decrement();
        }}
      >
        -
      </button>
    </div>
  );
}

export default connect(mapstatetoprops, mapdispatchtoprops)(Counter);
