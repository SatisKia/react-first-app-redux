import './Number.css';
import MyNumberA from './NumberA';
import MyNumberB from './NumberB';
import MyNumberC from './NumberC';

function MyNumber() {
  console.log("MyNumber");
  return (
    <div className="body">
      <MyNumberA />
      <MyNumberB />
      <MyNumberC />
    </div>
  );
}

export default MyNumber;
