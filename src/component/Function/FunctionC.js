import './Function.css';
import React from 'react';

class MyFunctionC extends React.Component {
  constructor(props) {
    console.log("MyFunctionC constructor");
    super(props);

    // 操作
    this.onButtonSin = this.onButtonSin.bind(this);
    this.onButtonCos = this.onButtonCos.bind(this);
    this.onButtonTan = this.onButtonTan.bind(this);
    this.onButtonArcSin = this.onButtonArcSin.bind(this);
    this.onButtonArcCos = this.onButtonArcCos.bind(this);
    this.onButtonArcTan = this.onButtonArcTan.bind(this);
    this.onButtonLog = this.onButtonLog.bind(this);
    this.onButtonLog10 = this.onButtonLog10.bind(this);
    this.onButtonSqr = this.onButtonSqr.bind(this);
    this.onButtonExp = this.onButtonExp.bind(this);
    this.onButtonExp10 = this.onButtonExp10.bind(this);
    this.onButtonInt = this.onButtonInt.bind(this);
  }

  // 操作
  onButtonFunction = ( func ) => {
    if( !global.calc.errorFlag ){
      func();
    }
  };
  onButtonSin = () => { this.onButtonFunction( () => {
    global.calcFunctionService.funcSin();
    global.calcFunctionService.setOp();
  } ); };
  onButtonCos = () => { this.onButtonFunction( () => {
    global.calcFunctionService.funcCos();
    global.calcFunctionService.setOp();
  } ); };
  onButtonTan = () => { this.onButtonFunction( () => {
    global.calcFunctionService.funcTan();
    global.calcFunctionService.setOp();
  } ); };
  onButtonArcSin = () => { this.onButtonFunction( () => {
    global.calcFunctionService.funcArcSin();
    global.calcFunctionService.setOp();
  } ); };
  onButtonArcCos = () => { this.onButtonFunction( () => {
    global.calcFunctionService.funcArcCos();
    global.calcFunctionService.setOp();
  } ); };
  onButtonArcTan = () => { this.onButtonFunction( () => {
    global.calcFunctionService.funcArcTan();
    global.calcFunctionService.setOp();
  } ); };
  onButtonLog = () => { this.onButtonFunction( () => {
    global.calcFunctionService.funcLog();
    global.calcFunctionService.setOp();
  } ); };
  onButtonLog10 = () => { this.onButtonFunction( () => {
    global.calcFunctionService.funcLog10();
    global.calcFunctionService.setOp();
  } ); };
  onButtonSqr = () => { this.onButtonFunction( () => {
    global.calcFunctionService.funcSqr();
    global.calcFunctionService.setOp();
  } ); };
  onButtonExp = () => { this.onButtonFunction( () => {
    global.calcFunctionService.funcExp();
    global.calcFunctionService.setOp();
  } ); };
  onButtonExp10 = () => { this.onButtonFunction( () => {
    global.calcFunctionService.funcExp10();
    global.calcFunctionService.setOp();
  } ); };
  onButtonInt = () => { this.onButtonFunction( () => {
    global.calcFunctionService.funcInt();
    global.calcFunctionService.setOp();
  } ); };

  render() {
    console.log("MyFunctionC render");
    return (
      <div>
        <div className="div_row">
          <div className="button2 func1 div_color_white" onClick={this.onButtonSin}>
            <span className="span_font_32 span_color_black">sin</span>
          </div>
          <div className="button2 func1 div_color_white" onClick={this.onButtonCos}>
            <span className="span_font_32 span_color_black">cos</span>
          </div>
          <div className="button2 func2 div_color_white" onClick={this.onButtonTan}>
            <span className="span_font_32 span_color_black">tan</span>
          </div>
        </div>
        <div className="div_row">
          <div className="button2 func1 div_color_white" onClick={this.onButtonArcSin}>
            <span className="span_font_32 span_color_black">asin</span>
          </div>
          <div className="button2 func1 div_color_white" onClick={this.onButtonArcCos}>
            <span className="span_font_32 span_color_black">acos</span>
          </div>
          <div className="button2 func2 div_color_white" onClick={this.onButtonArcTan}>
            <span className="span_font_32 span_color_black">atan</span>
          </div>
        </div>
        <div className="div_row">
          <div className="button2 func1 div_color_white" onClick={this.onButtonLog}>
            <span className="span_font_32 span_color_black">ln</span>
          </div>
          <div className="button2 func1 div_color_white" onClick={this.onButtonLog10}>
            <span className="span_font_32 span_color_black">log</span>
          </div>
          <div className="button2 func2 div_color_white" onClick={this.onButtonSqr}>
            <span className="span_font_32 span_color_black">sqr</span>
          </div>
        </div>
        <div className="div_row">
          <div className="button3 func1 div_color_white" onClick={this.onButtonExp}>
            <span className="span_font_32 span_color_black">exp</span>
          </div>
          <div className="button3 func1 div_color_white" onClick={this.onButtonExp10}>
            <span className="span_font_32 span_color_black">exp10</span>
          </div>
          <div className="button3 func2 div_color_white" onClick={this.onButtonInt}>
            <span className="span_font_32 span_color_black">int</span>
          </div>
        </div>
      </div>
    );
  }
}

export default MyFunctionC;
