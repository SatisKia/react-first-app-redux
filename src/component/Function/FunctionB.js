import './Function.css';
import { connect } from "react-redux";

const myFunctionBStateToProps = (state) => {
  return {
    errorFlag: state.errorFlag,
    angleButtonText: state.angleButtonText
  };
};
function MyFunctionB({ errorFlag, angleButtonText }) {
  console.log("MyFunctionB");

  const changeAngle = () => {
    if( global.calcFunctionService.angle() == global.calc.angleTypeRad ){
      global.calcFunctionService.setAngle( global.calc.angleTypeDeg );
    } else if( global.calcFunctionService.angle() == global.calc.angleTypeDeg ){
      global.calcFunctionService.setAngle( global.calc.angleTypeGrad );
    } else if( global.calcFunctionService.angle() == global.calc.angleTypeGrad ){
      global.calcFunctionService.setAngle( global.calc.angleTypeRad );
    }
  };

  // 操作
  const onButtonFunction = ( func ) => {
    if( !global.calc.errorFlag ){
      func();
    }
  };
  const onButtonClear = ( allFlag ) => {
    global.calcFunctionService.clearEntry( allFlag );
  };
  const onButtonCE = () => {
    onButtonClear( false );
  };
  const onButtonC = () => {
    onButtonClear( true );
  };
  const onButtonAngle = () => { onButtonFunction( () => {
    changeAngle();
  } ); };
  const onButtonSqrt = () => { onButtonFunction( () => {
    global.calcFunctionService.funcSqrt();
    global.calcFunctionService.setOp();
  } ); };

  const classNameDivCe = "button2 div_color_" + (errorFlag ? "red" : "white");
  const classNameSpanCe = "span_font_32 span_color_" + (errorFlag ? "white" : "red");

  return (
    <div>
      <div className="div_row">
        <div className={classNameDivCe} onClick={onButtonCE}>
          <span className={classNameSpanCe}>CE</span>
        </div>
        <div className={classNameDivCe} onClick={onButtonC}>
          <span className={classNameSpanCe}>C</span>
        </div>
        <div className="button2 div_color_white" onClick={onButtonAngle}>
          <span className="span_font_25 span_color_black">{angleButtonText}</span>
        </div>
        <div className="button2 div_color_white" onClick={onButtonSqrt}>
          <span className="span_font_40 span_color_black">√</span>
        </div>
      </div>
    </div>
  );
}
export default connect(myFunctionBStateToProps)(MyFunctionB);
