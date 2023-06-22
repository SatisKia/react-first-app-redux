import './Number.css';
import { connect } from "react-redux";
import store from '../../store';

const myNumberAStateToProps = (state) => {
  return {
    dispStr: state.dispStr,
    dispLog: state.dispLog,
    dispAnswer: state.dispAnswer,
    dispMemory: state.dispMemory,
    mrcButtonText: state.mrcButtonText,
    memoryRecalled: state.memoryRecalled,
    italicFlag: state.italicFlag,
    separatorType: state.separatorType
  };
};
function MyNumberA({ dispStr, dispLog, dispAnswer, dispMemory, mrcButtonText, memoryRecalled, italicFlag, separatorType, dispatch }) {
  console.log("MyNumberA");

  // 操作
  const onButtonNumber = ( func ) => {
    if( !global.calc.errorFlag ){
      func();
    }
  };
  const onButtonMAdd = () => { onButtonNumber( () => {
    global.calcNumberService.addMemory();
  } ); };
  const onButtonMSub = () => { onButtonNumber( () => {
    global.calcNumberService.subMemory();
  } ); };
  const onButtonMRC = () => { onButtonNumber( () => {
    if( global.calc.memoryRecalled ){
      global.calcNumberService.clearMemory();
    } else {
      global.calcNumberService.recallMemory();
    }
  } ); };
  const onButtonFunction = () => { onButtonNumber( () => {
    global.calcNumberService.setOp( global.calc.opTypeSet );
    global.calcFunctionService.init();
    store.dispatch({ type: "setMode", payload: global.calc.modeFunction });
  } ); };

  // 桁区切り
  if (separatorType == global.calc.separatorTypeDash) {
    dispStr = global.calcNumberService.sepString(dispStr, "'");
  } else if (separatorType == global.calc.separatorTypeComma) {
    dispStr = global.calcNumberService.sepString(dispStr, ",");
  }

  return (
    <div>
      <div className="div_log1" onClick={() => {
        global.calc.returnMode = global.calc.modeNumber;
        dispatch({ type: "setMode", payload: global.calc.modeOption });
      }}>
        <span className="span_log1">{dispLog}</span>
      </div>
      <div className="div_log2" onClick={() => {
        global.calc.returnMode = global.calc.modeNumber;
        dispatch({ type: "setMode", payload: global.calc.modeOption });
      }}>
        <span className={italicFlag ? "span_log2_italic" : "span_log2"}>{dispStr}</span>
      </div>
      <div className="div_log1" onClick={() => {
        global.calc.returnMode = global.calc.modeNumber;
        dispatch({ type: "setMode", payload: global.calc.modeOption });
      }}>
        <span className="span_log1">A = {dispAnswer}&nbsp;&nbsp;M = {dispMemory}</span>
      </div>
      <div className="div_row">
        <div className="button1 div_color_blue" onClick={onButtonMAdd}>
          <span className="span_font_25 span_color_black">M+</span>
        </div>
        <div className="button1 div_color_blue" onClick={onButtonMSub}>
          <span className="span_font_25 span_color_black">M-</span>
        </div>
        <div className="button1 div_color_blue" onClick={onButtonMRC}>
          <span className={"span_font_25 span_color_" + (memoryRecalled ? "red" : "black")}>{mrcButtonText}</span>
        </div>
        <div className="button1 div_color_red" onClick={onButtonFunction}>
          <span className="span_font_25 span_color_white">FNC</span>
        </div>
      </div>
    </div>
  );
}
export default connect(myNumberAStateToProps)(MyNumberA);
