import * as React from 'react';
import './App.css';
import backgroundImage from "./assets/options.jpg";
import {Main} from "./components/main/Main";
import {SaveTime} from "./components/savetime/SaveTime";
import {WhyTravelAgent} from "./components/whytravelagent/WhyTravelAgent";
import {Excursions} from "./components/excursions/Excursions";
import {Client} from "./components/client/Client";
import {ContactUs} from "./components/contactus/ContactUs";
import {Certifications} from "./components/certifications/Certifications";
import {ClientPayment} from "./components/clientpayment/ClientPayment";



class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <Main />
        <SaveTime/>
        <WhyTravelAgent />
        <Excursions />
        <Client />
        <Certifications/>
        <ClientPayment/>
        <ContactUs />
        <img className="home-background" src={backgroundImage} />
      </div>
    );
  }
}

export default App;
