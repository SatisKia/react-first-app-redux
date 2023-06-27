import './Function.css';
import { connect } from "react-redux";
import React from 'react';

const myFunctionBStateToProps = (state) => {
  return {
    errorFlag: state.errorFlag,
    angleButtonText: state.angleButtonText
  };
};
class MyFunctionB extends React.Component {
  constructor(props) {
    console.log("MyFunctionB constructor");
    super(props);

    // 操作
    this.onButtonCE = this.onButtonCE.bind(this);
    this.onButtonC = this.onButtonC.bind(this);
    this.onButtonAngle = this.onButtonAngle.bind(this);
    this.onButtonSqrt = this.onButtonSqrt.bind(this);
  }

  changeAngle = () => {
    if( global.calcFunctionService.angle() == global.calc.angleTypeRad ){
      global.calcFunctionService.setAngle( global.calc.angleTypeDeg );
    } else if( global.calcFunctionService.angle() == global.calc.angleTypeDeg ){
      global.calcFunctionService.setAngle( global.calc.angleTypeGrad );
    } else if( global.calcFunctionService.angle() == global.calc.angleTypeGrad ){
      global.calcFunctionService.setAngle( global.calc.angleTypeRad );
    }
  };

  // 操作
  onButtonFunction = ( func ) => {
    if( !global.calc.errorFlag ){
      func();
    }
  };
  onButtonClear = ( allFlag ) => {
    global.calcFunctionService.clearEntry( allFlag );
  };
  onButtonCE = () => {
    this.onButtonClear( false );
  };
  onButtonC = () => {
    this.onButtonClear( true );
  };
  onButtonAngle = () => { this.onButtonFunction( () => {
    this.changeAngle();
  } ); };
  onButtonSqrt = () => { this.onButtonFunction( () => {
    global.calcFunctionService.funcSqrt();
    global.calcFunctionService.setOp();
  } ); };

  render() {
    console.log("MyFunctionB render");

    const errorFlag = this.props.errorFlag;
    const angleButtonText = this.props.angleButtonText;

    const classNameDivCe = "button2 div_color_" + (errorFlag ? "red" : "white");
    const classNameSpanCe = "span_font_32 span_color_" + (errorFlag ? "white" : "red");

    return (
      <div>
        <div className="div_row">
          <div className={classNameDivCe} onClick={this.onButtonCE}>
            <span className={classNameSpanCe}>CE</span>
          </div>
          <div className={classNameDivCe} onClick={this.onButtonC}>
            <span className={classNameSpanCe}>C</span>
          </div>
          <div className="button2 div_color_white" onClick={this.onButtonAngle}>
            <span className="span_font_25 span_color_black">{angleButtonText}</span>
          </div>
          <div className="button2 div_color_white" onClick={this.onButtonSqrt}>
            <span className="span_font_40 span_color_black">√</span>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(myFunctionBStateToProps)(MyFunctionB);
