import React from "react";

import HcardButton from "../hcardButton/HcardButton";
import HcardPreview from "../hcardPreview/HcardPreview";
import hcardBuilderHook from "../../hooks/HcardBuilderHook";
import "./HcardBuilder.scss";
import * as constants from "../../constants";

const HcardBuilder = () => {
  const { inputs, handleInputChange } = hcardBuilderHook();
  return (
    <form>
      <div className="container">
        <div className="row">
           <div className="col-md-1 col-xs-1"></div> 
          <div className="col-md-5 col-xs-5 hcard-builder">
            <div className="inner-padding">
              <h4 className="heading">hCard Builder</h4>

              <div className="underline col-md-10 top">
                <label className="label-color">
                  {constants.PersonalDetails}
                </label>
              </div>
              <div className="row">
                <div className="col-md-5">
                  <div>
                    <label htmlFor="givenname">{constants.GivenName}</label>
                  </div>
                  <div>
                    <input
                      id="givenname"
                      type="text"
                      name="givenname"
                      onChange={handleInputChange}
                      value={inputs.givenname || ""}
                    ></input>
                  </div>
                </div>
                <div className="col-md-5">
                  <div>
                    <label htmlFor="surname">{constants.Surname}</label>
                  </div>
                  <div>
                    <input
                      id="surname"
                      type="text"
                      name="surname"
                      onChange={handleInputChange}
                      value={inputs.surname || ""}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5">
                  <div>
                    <label htmlFor="email">{constants.Email}</label>
                  </div>
                  <div>
                    <input
                      id="email"
                      type="text"
                      name="email"
                      onChange={handleInputChange}
                      value={inputs.email || ""}
                    ></input>
                  </div>
                </div>
                <div className="col-md-5">
                  <div>
                    <label htmlFor="phone">{constants.Phone}</label>
                  </div>
                  <div>
                    <input
                      id="phone"
                      type="text"
                      name="phone"
                      onChange={handleInputChange}
                      value={inputs.phone || ""}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="underline col-md-10 top">
                <label className="label-color">{constants.Address}</label>
              </div>
              <div className="row">
                <div className="col-md-5">
                  <div>
                    <label htmlFor="housename">{constants.HouseName}</label>
                  </div>
                  <div>
                    <input
                      id="housename"
                      type="text"
                      name="housename"
                      onChange={handleInputChange}
                      value={inputs.housename || ""}
                    ></input>
                  </div>
                </div>
                <div className="col-md-5">
                  <div>
                    <label htmlFor="street">{constants.Street}</label>
                  </div>
                  <div>
                    <input
                      id="street"
                      type="text"
                      name="street"
                      onChange={handleInputChange}
                      value={inputs.street || ""}
                      
                    ></input>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5">
                  <div>
                    <label htmlFor="suburb">{constants.Suburb}</label>
                  </div>
                  <div>
                    <input
                      id="suburb"
                      type="text"
                      name="suburb"
                      onChange={handleInputChange}
                      value={inputs.suburb || ""}
                      
                    ></input>
                  </div>
                </div>
                <div className="col-md-5">
                  <div>
                    <label htmlFor="state">{constants.State}</label>
                  </div>
                  <div>
                    <input
                      id="state"
                      type="text"
                      name="state"
                      onChange={handleInputChange}
                      value={inputs.state || ""}
                      
                    ></input>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-5">
                  <div>
                    <label htmlFor="postcode">{constants.Postcode}</label>
                  </div>
                  <div>
                    <input
                      id="postcode"
                      type="text"
                      name="postcode"
                      onChange={handleInputChange}
                      value={inputs.postcode || ""}
                      
                    ></input>
                  </div>
                </div>
                <div className="col-md-5">
                  <div>
                    <label htmlFor="country">{constants.Country}</label>
                  </div>
                  <div>
                    <input
                      id="country"
                      type="text"
                      name="country"
                      onChange={handleInputChange}
                      value={inputs.country || ""}
                      
                    ></input>
                  </div>
                </div>
              </div>
              <div className="row top">
                <HcardButton value="Upload Avatar" />
                <HcardButton value="Create hCard" />
              </div>
            </div>
          </div>
          <div className="col-md-1 col-xs-1"></div>
          <div className="col-md-5 col-xs-5 preview-top">
       
            <HcardPreview props={inputs} />
          </div>
        </div>
      </div>
     </form> 
  );
};

export default HcardBuilder;
