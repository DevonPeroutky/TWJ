import * as React from "react";
import "./panels.css";


const renderDiv = (link: string, title: string, description: string) => {
    if (link) {
        if (description) {
            return (
                <div className="content">
                    <div className="title">{title}</div>
                    <a href={link}>
                        <div className="description">{description}</div>
                    </a>
                </div>)
        } else {
            return (
                <div className="content">
                    <a href={link}>
                        <div className="title">{title}</div>
                    </a>
                    <div className="description">{description}</div>
                </div>)
        }

    } else {
        return(
            <div className="content">
                <div className="title">{title}</div>
                <div className="description">{description}</div>
            </div>)
    }
};





export const LeftPanel = (props: {img: any, title: string, description: string, link: string}) => (
        <div className="l-left-panel common-panel">
            {renderDiv(props.link, props.title, props.description)}
            <img src={props.img} />
        </div>
    );

export const RightPanel = (props: {img: any, title: string, description: string, link: string}) => (
  <div className="l-right-panel common-panel">
    <img src={props.img} />
    {renderDiv(props.link, props.title, props.description)}
  </div>
);