import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import './App.css';
import Ambulance from "./Componant/Ambulence/Ambulance";
import Header from "./Componant/Header/Header";
import Home from "./Componant/Home/Home";
import Login from './Componant/Login/Login'
import Signup from "./Componant/signup/Signup";
import Footer from './Componant/Footer/Footer';
import CovidVaccine from './Componant/CovidVaccine/CovidVaccine';
import Doctor from './Componant/Doctors/Doctor';
import AppointForm from './Componant/Doctors/AppointForm/AppointForm';
import HealthCheckup from './Componant/HealthCheckup/HealthCheckup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>


        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/ambulance">
            <Ambulance></Ambulance>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/signup">
            <Signup></Signup>
          </Route>
          <Route exact path="/covid">
            <CovidVaccine></CovidVaccine>
          </Route>
          <Route exact path="/doctor">
            <Doctor></Doctor>
          </Route>
          <Route exact path="/AppointForm">
            <AppointForm></AppointForm>
          </Route>
          <Route exact path="/healthcheckup">
            <HealthCheckup></HealthCheckup>
          </Route>
          <Route exact path="*">
            <h1 className="error">404 Not Found</h1>
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer></Footer>

    </div>
  );
}

export default App;
