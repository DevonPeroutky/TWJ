import * as React from "react";
import Adventure from "../../assets/adventure.jpg";
import {RightPanel} from "../../panels/Panels";

export const Excursions = (props: {}) => (
  <RightPanel
    img={Adventure}
    title="Already have a vacation booked?"
    description="Spice it up with an adventure! Excursions can be super-duper fun. Take a look at what our partners can offer!"
    link="http://www.shoreexcursionsgroup.com/Default.asp?Click=130317"
  />
);
