import './Function.css';
import MyFunctionA from './FunctionA';
import MyFunctionB from './FunctionB';
import MyFunctionC from './FunctionC';

function MyFunction() {
  console.log("MyFunction");
  return (
    <div className="body">
      <MyFunctionA />
      <MyFunctionB />
      <MyFunctionC />
    </div>
  );
}

export default MyFunction;
