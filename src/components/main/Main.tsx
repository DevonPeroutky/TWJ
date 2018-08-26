import * as React from "react";
import TWJLogo from "../../assets/twj.png";
import {Icon} from "@blueprintjs/core";
import "./main.css";
import {Constants} from "../../Constants";

export const Main = () => (
  <div className="main-container">
    <div className="header">
      <div className="landria-label"><img className="logo" src={TWJLogo}/>TrippinWithJamie</div>
    </div>
    <div className="content">
      <div className="title">Where to next?</div>
    </div>
    <div className="footer"><a href={"#" + Constants.SAVE_TIME}><Icon icon="chevron-down" iconSize={60}/></a></div>
  </div>
);

