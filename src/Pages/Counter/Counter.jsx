import { connect } from "react-redux";

import { addAction, subAction } from "../../Redux/Actions/SimpleAction";

import React from "react";

const mapstatetoprops = (state) => {
    console.log('state:', state);
    return{
        initialCount:state.counter.initialCount
    }

}

const mapdispatchtoprops = (dispatch) =>{
    return{
        addAction:()=>dispatch(addAction()),
        subAction:()=>dispatch(subAction())
    }
}

function Counter(props) {
  return (
    <div>
      <p>Count:{props.initialCount}</p>
      <button
        onClick={() => {
          props.addAction();
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          props.subAction();
        }}
      >
        -
      </button>
    </div>
  );
}

export default connect(mapstatetoprops, mapdispatchtoprops)(Counter);
