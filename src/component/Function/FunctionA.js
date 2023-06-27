import './Function.css';
import { connect } from "react-redux";
import React from 'react';
import store from '../../store';

const myFunctionAStateToProps = (state) => {
  return {
    dispStr: state.dispStr,
    dispAngle: state.dispAngle,
    dispMemory: state.dispMemory,
    mrcButtonText: state.mrcButtonText,
    memoryRecalled: state.memoryRecalled,
    italicFlag: state.italicFlag,
    separatorType: state.separatorType
  };
};
class MyFunctionA extends React.Component {
  constructor(props) {
    console.log("MyFunctionA constructor");
    super(props);

    // 操作
    this.onButtonMAdd = this.onButtonMAdd.bind(this);
    this.onButtonMSub = this.onButtonMSub.bind(this);
    this.onButtonMRC = this.onButtonMRC.bind(this);
    this.onButtonNumber = this.onButtonNumber.bind(this);
  }

  // 操作
  onButtonFunction = ( func ) => {
    if( !global.calc.errorFlag ){
      func();
    }
  };
  onButtonMAdd = () => { this.onButtonFunction( () => {
    global.calcFunctionService.addMemory();
  } ); };
  onButtonMSub = () => { this.onButtonFunction( () => {
    global.calcFunctionService.subMemory();
  } ); };
  onButtonMRC = () => { this.onButtonFunction( () => {
    if( global.calc.memoryRecalled ){
      global.calcFunctionService.clearMemory();
    } else {
      global.calcFunctionService.recallMemory();
    }
  } ); };
  onButtonNumber = () => { this.onButtonFunction( () => {
    global.calcFunctionService.setOp();
    global.calcNumberService.init();
    store.dispatch({ type: "setMode", payload: global.calc.modeNumber });
  } ); };

  render() {
    console.log("MyFunctionA render");

    let dispStr = this.props.dispStr;
    const dispAngle = this.props.dispAngle;
    const dispMemory = this.props.dispMemory;
    const mrcButtonText = this.props.mrcButtonText;
    const memoryRecalled = this.props.memoryRecalled;
    const italicFlag = this.props.italicFlag;
    const separatorType = this.props.separatorType;
    const dispatch = this.props.dispatch;

    // 桁区切り
    if (separatorType == global.calc.separatorTypeDash) {
      dispStr = global.calcFunctionService.sepString(dispStr, "'");
    } else if (separatorType == global.calc.separatorTypeComma) {
      dispStr = global.calcFunctionService.sepString(dispStr, ",");
    }

    return (
      <div>
        <div className="div_log1" onClick={() => {
          global.calc.returnMode = global.calc.modeFunction;
          dispatch({ type: "setMode", payload: global.calc.modeOption });
        }}>
          <span className="span_log1">{dispAngle}</span>
        </div>
        <div className="div_log2" onClick={() => {
          global.calc.returnMode = global.calc.modeFunction;
          dispatch({ type: "setMode", payload: global.calc.modeOption });
        }}>
          <span className={italicFlag ? "span_log2_italic" : "span_log2"}>{dispStr}</span>
        </div>
        <div className="div_log1" onClick={() => {
          global.calc.returnMode = global.calc.modeFunction;
          dispatch({ type: "setMode", payload: global.calc.modeOption });
        }}>
          <span className="span_log1">M = {dispMemory}</span>
        </div>
        <div className="div_row">
          <div className="button1 div_color_blue" onClick={this.onButtonMAdd}>
            <span className="span_font_25 span_color_black">M+</span>
          </div>
          <div className="button1 div_color_blue" onClick={this.onButtonMSub}>
            <span className="span_font_25 span_color_black">M-</span>
          </div>
          <div className="button1 div_color_blue" onClick={this.onButtonMRC}>
            <span className={"span_font_25 span_color_" + (memoryRecalled ? "red" : "black")}>{mrcButtonText}</span>
          </div>
          <div className="button1 div_color_red" onClick={this.onButtonNumber}>
            <span className="span_font_25 span_color_white">NUM</span>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(myFunctionAStateToProps)(MyFunctionA);
