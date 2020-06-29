import buttonStyles from "../buttonStyles/buttonStyles";

const translateProps = (props) => {
  let _styles = { ...buttonStyles.upload };
  let buttonText;
  if (props.value === "Upload Avatar") {
    _styles = _styles;
  } else if (props.value === "Create hCard") {
    _styles = { ..._styles, ...buttonStyles.create };
  }
  buttonText = props.value;
  const newProps = { ...props, styles: _styles, buttonText: buttonText };
  return newProps;
};

export default (WrappedComponent) => {
  return function wrappedRender(args) {
    return WrappedComponent(translateProps(args));
  };
};
