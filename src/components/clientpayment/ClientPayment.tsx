import * as React from "react";
import Couple from "../../assets/lake-couple.jpg";
import {LeftPanel} from "../../panels/Panels";

export const ClientPayment = (props: {}) => (
  <LeftPanel
    img={Couple}
    title="Client Payment Form? Click Here!"
    description=""
    link="https://vacationcrm.com/travelmvc/IFramePayment?lookup_id=6CFF1264-3B96-4407-9786-641241465B21"
  />
);