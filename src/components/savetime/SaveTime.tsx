import * as React from "react";
import "./savetime.css";
import {Icon, IconName} from "@blueprintjs/core";
import {Constants} from "../../Constants";
import ScrollableAnchor from "react-scrollable-anchor";

export const SaveTime = (props: {}) => (
  <div className="save-time">
    <ScrollableAnchor id={Constants.SAVE_TIME}><div className="title">Have a great vacation without the hassle of planning!</div></ScrollableAnchor>
    <div className="icon-row">
      <IconItem icon="globe" title="Expert advice without the cost" description="There’s no cost. Our commission comes from our suppliers, so booking with us means you get top-notch service for free."/>
      <IconItem icon="badge" title="We are certified in special needs travel!" description="We are trained and certified to best prepare for those needing special diets, on the autism spectrum, needing low-sensory environments, in a wheelchair, with a service dog, or needing allergy friendly accommodations." />
      <IconItem icon="chat" title="We tailor your experience!" description="You are not just a name and a number to us. Every client will plan their travel with a certified travel agent over phone, email, or text." />
    </div>
  </div>
);

const IconItem = (props: {title: string, description: string, icon: IconName}) => (
  <div className="icon-item">
    <Icon className="icon" icon={props.icon} iconSize={100}/>
    <div className="i-title">{props.title}</div>
    <div className="description">{props.description}</div>
  </div>
)

