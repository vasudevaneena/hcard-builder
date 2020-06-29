import React from "react";

import avatar from "../../avatar/avatar.jpg";
import smallAvatar from "../../avatar/smallavatar.jpg";
import * as constants from "../../constants";
import UserImage from "../userImage/UserImage";
import CapitalizedText from "../helper/CapitalizedText";
import "./HcardPreview.scss";

const HcardPreview = (inputs) => {
  
  const {
    givenname,
    surname,
    email,
    phone,
    housename,
    street,
    suburb,
    state,
    postcode,
    country,
  } = inputs.props;
  let seperation;
  if (suburb && state) {
    seperation = ",";
  }
  return (
    <>
      <div className="row">
        <div className="col-md-8"></div>
        <div className="col-md-4 preview-title">{constants.HcardPreview}</div>
      </div>

      <div className="name">
        <div className="row">
          <div className="title-width">
            <h4 className="title-padding">
              <span>
                <CapitalizedText name={givenname} />
              </span>
              <span> </span>
              <span>
                <CapitalizedText name={surname} />
              </span>
            </h4>
          </div>
          <div className="image-position">
            <UserImage
              image={avatar}
              smallImage={smallAvatar}
              givenname={givenname}
              surname={surname}
            />
          </div>
        </div>
      </div>
      <div className="previewcard">
        <div className="row underline">
          <div className="col-md-3">
            <label>{constants.Email}</label>
          </div>

          <div className="col-md-9">
            <span>{email}</span>
          </div>
        </div>
        <div className="row underline">
          <div className="col-md-3">
            <label>{constants.Phone}</label>
          </div>

          <div className="col-md-9">
            <span>{phone}</span>
          </div>
        </div>
        <div className="row underline">
          <div className="col-md-3">
            <label>{constants.Address}</label>
          </div>

          <div className="col-md-9">
            <span>
              {housename} {street}
            </span>
          </div>
        </div>
        <div className="row underline">
          <div className="col-md-3">
            <label></label>
          </div>

          <div className="col-md-9">
            <span>
              {suburb} {seperation} {state}
            </span>
          </div>
        </div>
        <div className="row underline">
          <div className="col-md-3">
            <label>{constants.Postcode}</label>
          </div>

          <div className="col-md-3">
            <span>{postcode} </span>
          </div>

          <div className="col-md-3">
            <label>{constants.Country}</label>
          </div>

          <div className="col-md-3">
            <span>{country}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HcardPreview;
