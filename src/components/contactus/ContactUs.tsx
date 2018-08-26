import * as React from "react";
import "./contactus.css";
import Jamie from "../../assets/profiles/Jamie.jpeg";
import {ContactForm} from "../contactform/ContactForm";
import ScrollableAnchor from "react-scrollable-anchor";
import {Constants} from "../../Constants";

export class ContactUs extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="contact-us">
        <div className="left-panel">
          <ScrollableAnchor id={Constants.CONTACT}><div className="title">Let's plan your vacation! We don't bite</div></ScrollableAnchor>
          <ContactForm className="contact-us-form"/>
        </div>
        <div className="profiles">
          <Profile pic={Jamie} name="Jamie Scheff" position="Founder & CEO" role="Certified Travel Agent" />
        </div>
      </div>
    )
  }
}

const Profile = (props: {pic: any, name: string, position: string, role: string}) => (
  <div className="profile">
    <img className="rounded" src={props.pic}/>
    <div className="info">
      <div className="name">{props.name}</div>
      <div className="description">{props.position}</div>
      <div className="description">{props.role}</div>
    </div>
  </div>
);
