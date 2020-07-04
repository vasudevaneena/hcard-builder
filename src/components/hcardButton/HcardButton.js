import React from "react";
import styleWrapper from "../../HOC/stylesWrapper";
//import "./HcardButton.scss"

const HcardButton = (props) => {
  return (
    <div className="col-md-5 button-margins">
      <button aria-label={props.buttonText} style={props.styles}>{props.buttonText}</button>
    </div>
  );
};

export default styleWrapper(HcardButton);
