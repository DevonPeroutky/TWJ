import * as React from "react";
import Greece from "../../assets/greece.jpg";
import {LeftPanel} from "../../panels/Panels";

export const WhyTravelAgent = (props: {}) => (
  <LeftPanel
    img={Greece}
    title="Reason #47 why you should use a travel agent?"
    description="We have access to deals that you might not otherwise be able to see. Click here to see a sample of what is available!"
    link="http://20031638.travsearch.com/"
  />
);
