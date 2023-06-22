import './Number.css';
import { connect } from "react-redux";

const myNumberBStateToProps = (state) => {
  return {
    errorFlag: state.errorFlag
  };
};
function MyNumberB({ errorFlag }) {
  console.log("MyNumberB");

  // 操作
  const onButtonNumber = ( func ) => {
    if( !global.calc.errorFlag ){
      func();
    }
  };
  const onButtonClear = ( allFlag ) => {
    global.calcNumberService.clearEntry( allFlag );
  };
  const onButtonCE = () => {
    onButtonClear( false );
  };
  const onButtonC = () => {
    onButtonClear( true );
  };
  const onButtonDEL = () => {
    if( !global.calc.errorFlag && global.calc.entryFlag ){
      global.calcNumberService.delEntry();
    }
  };
  const onButtonDiv = () => { onButtonNumber( () => {
    global.calcNumberService.setOp( global.calc.opTypeDiv );
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
        <div className="button2 div_color_white" onClick={onButtonDEL}>
          <span className="span_font_32 span_color_black">DEL</span>
        </div>
        <div className="button2 div_color_white" onClick={onButtonDiv}>
          <span className="span_font_40 span_color_black">÷</span>
        </div>
      </div>
    </div>
  );
}
export default connect(myNumberBStateToProps)(MyNumberB);
