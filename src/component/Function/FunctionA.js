import './Function.css';
import { connect } from "react-redux";
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
function MyFunctionA({ dispStr, dispAngle, dispMemory, mrcButtonText, memoryRecalled, italicFlag, separatorType, dispatch }) {
  console.log("MyFunctionA");

  // 操作
  const onButtonFunction = ( func ) => {
    if( !global.calc.errorFlag ){
      func();
    }
  };
  const onButtonMAdd = () => { onButtonFunction( () => {
    global.calcFunctionService.addMemory();
  } ); };
  const onButtonMSub = () => { onButtonFunction( () => {
    global.calcFunctionService.subMemory();
  } ); };
  const onButtonMRC = () => { onButtonFunction( () => {
    if( global.calc.memoryRecalled ){
      global.calcFunctionService.clearMemory();
    } else {
      global.calcFunctionService.recallMemory();
    }
  } ); };
  const onButtonNumber = () => { onButtonFunction( () => {
    global.calcFunctionService.setOp();
    global.calcNumberService.init();
    store.dispatch({ type: "setMode", payload: global.calc.modeNumber });
  } ); };

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
        <div className="button1 div_color_blue" onClick={onButtonMAdd}>
          <span className="span_font_25 span_color_black">M+</span>
        </div>
        <div className="button1 div_color_blue" onClick={onButtonMSub}>
          <span className="span_font_25 span_color_black">M-</span>
        </div>
        <div className="button1 div_color_blue" onClick={onButtonMRC}>
          <span className={"span_font_25 span_color_" + (memoryRecalled ? "red" : "black")}>{mrcButtonText}</span>
        </div>
        <div className="button1 div_color_red" onClick={onButtonNumber}>
          <span className="span_font_25 span_color_white">NUM</span>
        </div>
      </div>
    </div>
  );
}
export default connect(myFunctionAStateToProps)(MyFunctionA);
