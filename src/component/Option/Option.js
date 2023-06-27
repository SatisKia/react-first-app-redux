import './Option.css';
import { connect } from "react-redux";
import React from 'react';
import store from '../../store';

const myOptionStateToProps = (state) => {
  return {
    italicFlag: state.italicFlag,
    separatorType: state.separatorType
  };
};
class MyOption extends React.Component {
  constructor(props) {
    console.log("MyOption constructor");
    super(props);
  }

  // イタリック
  handleChangeItalic = () => {
    console.log("handleChangeItalic");

    global.calc.italicFlag = !global.calc.italicFlag;
    global.calc.save(global.calc.saveItalicFlag);

    store.dispatch({ type: "setItalicFlag", payload: global.calc.italicFlag });
  };

  // 桁区切り
  handleChangeSeparatorTypeNone = () => {
    console.log("handleChangeSeparatorTypeNone");

    global.calc.separatorType = global.calc.separatorTypeNone;
    global.calc.save(global.calc.saveSeparatorType);

    store.dispatch({ type: "setSeparatorType", payload: global.calc.separatorType });
  };
  handleChangeSeparatorTypeDash = () => {
    console.log("handleChangeSeparatorTypeDash");

    global.calc.separatorType = global.calc.separatorTypeDash;
    global.calc.save(global.calc.saveSeparatorType);

    store.dispatch({ type: "setSeparatorType", payload: global.calc.separatorType });
  };
  handleChangeSeparatorTypeComma = () => {
    console.log("handleChangeSeparatorTypeComma");

    global.calc.separatorType = global.calc.separatorTypeComma;
    global.calc.save(global.calc.saveSeparatorType);

    store.dispatch({ type: "setSeparatorType", payload: global.calc.separatorType });
  };

  render() {
    console.log("MyOption render");

    const isEnglish = global.calc.isEnglish();
    const strBack           = isEnglish ? "Return" : "戻る";
    const strItalic         = isEnglish ? "Display calculation results in italics" : "計算結果をイタリックに";
    const strSeparator      = isEnglish ? "Separator" : "桁区切り";
    const strSeparatorNone  = isEnglish ? "None" : "なし";
    const strSeparatorUpper = isEnglish ? "Upper" : "上部";
    const strSeparatorLower = isEnglish ? "Lower" : "下部";

    const italicFlag = this.props.italicFlag;
    const separatorType = this.props.separatorType;
    const dispatch = this.props.dispatch;

    return (
      <div className="option_body">
        <div className="div_return" onClick={() => { dispatch({ type: "setMode", payload: global.calc.returnMode }); }}>
          <span className="span_return">{strBack}</span>
        </div>
        <div className="div_option">
          <fieldset className="checkbox1">
            <label>
              <input type="checkbox" name="checkbox1" checked={italicFlag} onChange={this.handleChangeItalic} />
              <span className="span_option">&nbsp;{strItalic}</span>
            </label>
          </fieldset>
          <div className="div_space"></div>
          <div>
            <span className="span_option">{strSeparator}:</span>
          </div>
          <fieldset className="radio1">
            <label>
              <input type="radio" name="radio1" checked={separatorType === global.calc.separatorTypeNone} onChange={this.handleChangeSeparatorTypeNone} />
              <span className="span_option">&nbsp;{strSeparatorNone}</span>
            </label>
          </fieldset>
          <fieldset className="radio1">
            <label>
              <input type="radio" name="radio1" checked={separatorType === global.calc.separatorTypeDash} onChange={this.handleChangeSeparatorTypeDash} />
              <span className="span_option">&nbsp;{strSeparatorUpper}</span>
            </label>
          </fieldset>
          <fieldset className="radio1">
            <label>
              <input type="radio" name="radio1" checked={separatorType === global.calc.separatorTypeComma} onChange={this.handleChangeSeparatorTypeComma} />
              <span className="span_option">&nbsp;{strSeparatorLower}</span>
            </label>
          </fieldset>
        </div>
      </div>
    );
  }
}
export default connect(myOptionStateToProps)(MyOption);
