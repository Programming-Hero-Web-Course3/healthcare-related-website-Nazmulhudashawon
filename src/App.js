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
import AuthProvider from './Context/AuthProvider';
import Aboutus from './Componant/Aboutus/Aboutus';
import Hospital from './Componant/Hospital/Hospital';
import PrivateRoute from './Componant/PrivateRoute/PrivateRoute';
import AskDoctor from './Componant/AskDoctor/AskDoctor';
import HealthTips from './Componant/HealthTips/HealthTips';
import EmargencyHealth from './Componant/EmargencyHealth/EmargencyHealth';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>


          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/hospital">
              <Hospital></Hospital>
            </Route>
            <Route exact path="/aboutus">
              <Aboutus></Aboutus>
            </Route>
            <PrivateRoute exact path="/ambulance">
              <Ambulance></Ambulance>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/signup">
              <Signup></Signup>
            </Route>
            <Route exact path="/covid">
              <CovidVaccine></CovidVaccine>
            </Route>
            <PrivateRoute exact path="/doctor">
              <Doctor></Doctor>
            </PrivateRoute>
            <Route exact path="/AppointForm">
              <AppointForm></AppointForm>
            </Route>
            <Route exact path="/healthcheckup">
              <HealthCheckup></HealthCheckup>
            </Route>
            <Route exact path="/emargency">
              <EmargencyHealth></EmargencyHealth>
            </Route>
            <PrivateRoute exact path="/ask">
              <AskDoctor></AskDoctor>
            </PrivateRoute>
            <PrivateRoute exact path="/tips">
              <HealthTips></HealthTips>
            </PrivateRoute>
            <Route exact path="*">
              <h1 className="error">404 Not Found</h1>
            </Route>
          </Switch>
        </BrowserRouter>
        <Footer></Footer>
      </AuthProvider>

    </div>
  );
}

export default App;
