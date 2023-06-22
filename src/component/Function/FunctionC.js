import './Function.css';

function MyFunctionC() {
  console.log("MyFunctionC");

  // 操作
  const onButtonFunction = ( func ) => {
    if( !global.calc.errorFlag ){
      func();
    }
  };
  const onButtonSin = () => { onButtonFunction( () => {
    global.calcFunctionService.funcSin();
    global.calcFunctionService.setOp();
  } ); };
  const onButtonCos = () => { onButtonFunction( () => {
    global.calcFunctionService.funcCos();
    global.calcFunctionService.setOp();
  } ); };
  const onButtonTan = () => { onButtonFunction( () => {
    global.calcFunctionService.funcTan();
    global.calcFunctionService.setOp();
  } ); };
  const onButtonArcSin = () => { onButtonFunction( () => {
    global.calcFunctionService.funcArcSin();
    global.calcFunctionService.setOp();
  } ); };
  const onButtonArcCos = () => { onButtonFunction( () => {
    global.calcFunctionService.funcArcCos();
    global.calcFunctionService.setOp();
  } ); };
  const onButtonArcTan = () => { onButtonFunction( () => {
    global.calcFunctionService.funcArcTan();
    global.calcFunctionService.setOp();
  } ); };
  const onButtonLog = () => { onButtonFunction( () => {
    global.calcFunctionService.funcLog();
    global.calcFunctionService.setOp();
  } ); };
  const onButtonLog10 = () => { onButtonFunction( () => {
    global.calcFunctionService.funcLog10();
    global.calcFunctionService.setOp();
  } ); };
  const onButtonSqr = () => { onButtonFunction( () => {
    global.calcFunctionService.funcSqr();
    global.calcFunctionService.setOp();
  } ); };
  const onButtonExp = () => { onButtonFunction( () => {
    global.calcFunctionService.funcExp();
    global.calcFunctionService.setOp();
  } ); };
  const onButtonExp10 = () => { onButtonFunction( () => {
    global.calcFunctionService.funcExp10();
    global.calcFunctionService.setOp();
  } ); };
  const onButtonInt = () => { onButtonFunction( () => {
    global.calcFunctionService.funcInt();
    global.calcFunctionService.setOp();
  } ); };

  return (
    <div>
      <div className="div_row">
        <div className="button2 func1 div_color_white" onClick={onButtonSin}>
          <span className="span_font_32 span_color_black">sin</span>
        </div>
        <div className="button2 func1 div_color_white" onClick={onButtonCos}>
          <span className="span_font_32 span_color_black">cos</span>
        </div>
        <div className="button2 func2 div_color_white" onClick={onButtonTan}>
          <span className="span_font_32 span_color_black">tan</span>
        </div>
      </div>
      <div className="div_row">
        <div className="button2 func1 div_color_white" onClick={onButtonArcSin}>
          <span className="span_font_32 span_color_black">asin</span>
        </div>
        <div className="button2 func1 div_color_white" onClick={onButtonArcCos}>
          <span className="span_font_32 span_color_black">acos</span>
        </div>
        <div className="button2 func2 div_color_white" onClick={onButtonArcTan}>
          <span className="span_font_32 span_color_black">atan</span>
        </div>
      </div>
      <div className="div_row">
        <div className="button2 func1 div_color_white" onClick={onButtonLog}>
          <span className="span_font_32 span_color_black">ln</span>
        </div>
        <div className="button2 func1 div_color_white" onClick={onButtonLog10}>
          <span className="span_font_32 span_color_black">log</span>
        </div>
        <div className="button2 func2 div_color_white" onClick={onButtonSqr}>
          <span className="span_font_32 span_color_black">sqr</span>
        </div>
      </div>
      <div className="div_row">
        <div className="button3 func1 div_color_white" onClick={onButtonExp}>
          <span className="span_font_32 span_color_black">exp</span>
        </div>
        <div className="button3 func1 div_color_white" onClick={onButtonExp10}>
          <span className="span_font_32 span_color_black">exp10</span>
        </div>
        <div className="button3 func2 div_color_white" onClick={onButtonInt}>
          <span className="span_font_32 span_color_black">int</span>
        </div>
      </div>
    </div>
  );
}

export default MyFunctionC;
