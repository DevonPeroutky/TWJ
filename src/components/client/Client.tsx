import * as React from "react";
import Clients from "../../assets/clients.jpg";
import {LeftPanel} from "../../panels/Panels";

export const Client = (props: {}) => (
  <LeftPanel
    img={Clients}
    title="Client looking to submit information?"
    description="Head on over to our client info portal."
    link="https://vacationcrm.com/travelmvc/IFrameRegistration?lookup_id=6CFF1264-3B96-4407-9786-641241465B21"
  />
);