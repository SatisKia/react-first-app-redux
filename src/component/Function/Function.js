import './Function.css';
import MyFunctionA from './FunctionA';
import MyFunctionB from './FunctionB';
import MyFunctionC from './FunctionC';
import React from 'react';

class MyFunction extends React.Component {
  render() {
    console.log("MyFunction");
    return (
      <div className="body">
        <MyFunctionA />
        <MyFunctionB />
        <MyFunctionC />
      </div>
    );
  }
}

export default MyFunction;
