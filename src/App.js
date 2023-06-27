import './App.css';
import { connect } from "react-redux";
import CalcFunctionService from './service/CalcFunctionService';
import CalcNumberService from './service/CalcNumberService';
import MyFunction from './component/Function/Function';
import MyNumber from './component/Number/Number';
import MyOption from './component/Option/Option';
import React from 'react';
import store from './store';

class MyCalcNumberService extends CalcNumberService {
  init(){
    console.log("MyCalcNumberService init");
    super.init();
  }

  setDispError( type ){
    if( type == global.calc.errorTypeDivideByZero ){
      store.dispatch({ type: "setDispStr", payload: "Divide by zero" });
    } else if( type == global.calc.errorTypePositiveInfinity ){
      store.dispatch({ type: "setDispStr", payload: "Infinity" });
    } else if( type == global.calc.errorTypeNegativeInfinity ){
      store.dispatch({ type: "setDispStr", payload: "-Infinity" });
    } else if( type == global.calc.errorTypeNotANumber ){
      store.dispatch({ type: "setDispStr", payload: "NaN" });
    }
  }
  setDispResult( value ){
    store.dispatch({ type: "setDispStr", payload: this.valueToString( value, 15 ) });
  }
  setDispEntry( entry ){
    store.dispatch({ type: "setDispStr", payload: entry });
  }
  clearDispLog(){
    store.dispatch({ type: "setDispLog", payload: "" });
  }
  setDispLog( value, opType ){
    if( opType == global.calc.opTypeDiv ){
      store.dispatch({ type: "setDispLog", payload: this.valueToString( value, 10 ) + " ÷" });
    }
    if( opType == global.calc.opTypeMul ){
      store.dispatch({ type: "setDispLog", payload: this.valueToString( value, 10 ) + " ×" });
    }
    if( opType == global.calc.opTypeSub ){
      store.dispatch({ type: "setDispLog", payload: this.valueToString( value, 10 ) + " -" });
    }
    if( opType == global.calc.opTypeAdd ){
      store.dispatch({ type: "setDispLog", payload: this.valueToString( value, 10 ) + " +" });
    }
  }
  addDispLog( value ){
    const dispLog = store.getState().dispLog;
    store.dispatch({ type: "setDispLog", payload: dispLog + " " + this.valueToString( value, 10 ) + " =" });
  }
  setDispAnswer( value ){
    store.dispatch({ type: "setDispAnswer", payload: this.valueToString( value, 10 ) });
  }
  setDispMemory( value ){
    store.dispatch({ type: "setDispMemory", payload: this.valueToString( value, 10 ) });
  }
  memoryRecalled( flag ){
    store.dispatch({ type: "setMrcButtonText", payload: flag ? "MC" : "MR" });
  }
  errorChanged( flag ){
    store.dispatch({ type: "setErrorFlag", payload: flag });
  }
}

class MyCalcFunctionService extends CalcFunctionService {
  init(){
    console.log("MyCalcFunctionService init");
    super.init();
  }

  setDispError( type ){
    if( type == global.calc.errorTypeDivideByZero ){
      store.dispatch({ type: "setDispStr", payload: "Divide by zero" });
    } else if( type == global.calc.errorTypePositiveInfinity ){
      store.dispatch({ type: "setDispStr", payload: "Infinity" });
    } else if( type == global.calc.errorTypeNegativeInfinity ){
      store.dispatch({ type: "setDispStr", payload: "-Infinity" });
    } else if( type == global.calc.errorTypeNotANumber ){
      store.dispatch({ type: "setDispStr", payload: "NaN" });
    }
  }
  setDispResult( value ){
    store.dispatch({ type: "setDispStr", payload: this.valueToString( value, 15 ) });
  }
  setDispEntry( entry ){
    store.dispatch({ type: "setDispStr", payload: entry });
  }
  setDispMemory( value ){
    store.dispatch({ type: "setDispMemory", payload: this.valueToString( value, 10 ) });
  }
  memoryRecalled( flag ){
    store.dispatch({ type: "setMrcButtonText", payload: flag ? "MC" : "MR" });
  }
  errorChanged( flag ){
    store.dispatch({ type: "setErrorFlag", payload: flag });
  }

  angleChanged( type ){
    if( type == global.calc.angleTypeRad ){
      store.dispatch({ type: "setDispAngle", payload: "RAD" });
      store.dispatch({ type: "setAngleButtonText", payload: "DEG" });
    } else if( type == global.calc.angleTypeDeg ){
      store.dispatch({ type: "setDispAngle", payload: "DEG" });
      store.dispatch({ type: "setAngleButtonText", payload: "GRAD" });
    } else if( type == global.calc.angleTypeGrad ){
      store.dispatch({ type: "setDispAngle", payload: "GRAD" });
      store.dispatch({ type: "setAngleButtonText", payload: "RAD" });
    }
  }
}

global.calcNumberService = new MyCalcNumberService();
global.calcNumberService.init();
global.calcFunctionService = new MyCalcFunctionService();
global.calcFunctionService.init();

window.onlanguagechange = (event) => {
  const isEnglish = global.calc.isEnglish();
  document.title = isEnglish ? "Calculator" : "電卓";
};

const appStateToProps = (state) => {
  return {
    mode: state.mode
  };
};
class App extends React.Component {
  constructor(props) {
    console.log("App constructor");
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div style={{ display: (this.props.mode === global.calc.modeNumber) ? "block" : "none" }}>
          <MyNumber />
        </div>
        <div style={{ display: (this.props.mode === global.calc.modeFunction) ? "block" : "none" }}>
          <MyFunction />
        </div>
        <div style={{ display: (this.props.mode === global.calc.modeOption) ? "block" : "none" }}>
          <MyOption />
        </div>
      </div>
    );
  }
}
export default connect(appStateToProps)(App);
