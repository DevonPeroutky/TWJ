import * as React from "react";
import Certs from "../../assets/certifications.jpg";
import {RightPanel} from "../../panels/Panels";

export const Certifications = (props: {}) => (
    <RightPanel
        img={Certs}
        title="Certifications? Yup, we got em."
        description=""
        link=""
    />
);