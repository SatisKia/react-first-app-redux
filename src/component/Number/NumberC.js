import './Number.css';

function MyNumberC() {
  console.log("MyNumberC");

  // 操作
  const onButtonNumber = ( func ) => {
    if( !global.calc.errorFlag ){
      func();
    }
  };
  const onButtonMul = () => { onButtonNumber( () => {
    global.calcNumberService.setOp( global.calc.opTypeMul );
  } ); };
  const onButtonSub = () => { onButtonNumber( () => {
    global.calcNumberService.setOp( global.calc.opTypeSub );
  } ); };
  const onButtonAdd = () => { onButtonNumber( () => {
    global.calcNumberService.setOp( global.calc.opTypeAdd );
  } ); };
  const onButton0 = () => { onButtonNumber( () => {
    global.calcNumberService.addNumber( "0" );
  } ); };
  const onButton1 = () => { onButtonNumber( () => {
    global.calcNumberService.addNumber( "1" );
  } ); };
  const onButton2 = () => { onButtonNumber( () => {
    global.calcNumberService.addNumber( "2" );
  } ); };
  const onButton3 = () => { onButtonNumber( () => {
    global.calcNumberService.addNumber( "3" );
  } ); };
  const onButton4 = () => { onButtonNumber( () => {
    global.calcNumberService.addNumber( "4" );
  } ); };
  const onButton5 = () => { onButtonNumber( () => {
    global.calcNumberService.addNumber( "5" );
  } ); };
  const onButton6 = () => { onButtonNumber( () => {
    global.calcNumberService.addNumber( "6" );
  } ); };
  const onButton7 = () => { onButtonNumber( () => {
    global.calcNumberService.addNumber( "7" );
  } ); };
  const onButton8 = () => { onButtonNumber( () => {
    global.calcNumberService.addNumber( "8" );
  } ); };
  const onButton9 = () => { onButtonNumber( () => {
    global.calcNumberService.addNumber( "9" );
  } ); };
  const onButtonPoint = () => { onButtonNumber( () => {
    global.calcNumberService.addPoint();
  } ); };
  const onButtonNegative = () => { onButtonNumber( () => {
    global.calcNumberService.negative();
  } ); };
  const onButtonEqual = () => { onButtonNumber( () => {
    global.calcNumberService.setOp( global.calc.opTypeSet );
  } ); }

  return (
    <div>
      <div className="div_row">
        <div className="button2 div_color_white" onClick={onButton7}>
          <span className="span_font_40 span_color_black">7</span>
        </div>
        <div className="button2 div_color_white" onClick={onButton8}>
          <span className="span_font_40 span_color_black">8</span>
        </div>
        <div className="button2 div_color_white" onClick={onButton9}>
          <span className="span_font_40 span_color_black">9</span>
        </div>
        <div className="button2 div_color_white" onClick={onButtonMul}>
          <span className="span_font_40 span_color_black">×</span>
        </div>
      </div>
      <div className="div_row">
        <div className="button2 div_color_white" onClick={onButton4}>
          <span className="span_font_40 span_color_black">4</span>
        </div>
        <div className="button2 div_color_white" onClick={onButton5}>
          <span className="span_font_40 span_color_black">5</span>
        </div>
        <div className="button2 div_color_white" onClick={onButton6}>
          <span className="span_font_40 span_color_black">6</span>
        </div>
        <div className="button2 div_color_white" onClick={onButtonSub}>
          <span className="span_font_40 span_color_black">-</span>
        </div>
      </div>
      <div className="div_row">
        <div className="button2 div_color_white" onClick={onButton1}>
          <span className="span_font_40 span_color_black">1</span>
        </div>
        <div className="button2 div_color_white" onClick={onButton2}>
          <span className="span_font_40 span_color_black">2</span>
        </div>
        <div className="button2 div_color_white" onClick={onButton3}>
          <span className="span_font_40 span_color_black">3</span>
        </div>
        <div className="button2 div_color_white" onClick={onButtonAdd}>
          <span className="span_font_40 span_color_black">+</span>
        </div>
      </div>
        <div className="div_row">
        <div className="button3 div_color_white" onClick={onButtonNegative}>
          <span className="span_font_40 span_color_black">+/-</span>
        </div>
        <div className="button3 div_color_white" onClick={onButton0}>
          <span className="span_font_40 span_color_black">0</span>
        </div>
        <div className="button3 div_color_white" onClick={onButtonPoint}>
          <span className="span_font_40 span_color_black">.</span>
        </div>
        <div className="button3 div_color_white" onClick={onButtonEqual}>
          <span className="span_font_40 span_color_red">=</span>
        </div>
      </div>
    </div>
  );
}

export default MyNumberC;
