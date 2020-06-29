import React from "react";
import ModalImage from "react-modal-image";
import "./UserImage.scss"

const UserImage = (props) => {
  const { image, smallImage } = props;
 
  return (
      <ModalImage small={smallImage} large={image} alt="Hello!" />
  );
};

export default UserImage;
