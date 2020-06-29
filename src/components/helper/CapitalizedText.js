import React from "react";

const CapitalizedText = (props) => {
  if (props.name) {
    return props.name.charAt(0).toUpperCase() + props.name.slice(1);
  } else return "";
};

export default CapitalizedText;
