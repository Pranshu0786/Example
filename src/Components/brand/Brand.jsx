import React from "react";
import { google, slack, atlassian, dropbox, shopify } from "./imports";
import "./brand.css";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="hi" />
      </div>
      <div>
        <img src={slack} alt="hi" />
      </div>
      <div>
        <img src={atlassian} alt="hi" />
      </div>
      <div>
        <img src={dropbox} alt="hi" />
      </div>
      <div>
        <img src={shopify} alt="hi" />
      </div>
    </div>
  );
};

export default Brand;
