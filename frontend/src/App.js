import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from "react-router-dom"
import TutorList from "./components/tutor-list"
import Login from "./components/login"
import Register from "./components/register"
import CreateAppointment from "./components/create-appointment"
import Navbar from "./components/navbar.component"
import landingpage from "./components/landingpage"
import TutorView from "./components/tutor-view"
import { Helmet } from 'react-helmet'

function App() {
  return (
    
    <Router>


    <Helmet>
      <title>Etootus</title>
    </Helmet>


    <Route path ="/" exact component={landingpage} />
    
    <Route path ="/home" exact component={Navbar} />
    <Route path ="/home" exact component={TutorList} />

    <Route path ="/login" exact component={Navbar} />
    <Route path ="/login" exact component={Login} />

    <Route path ="/register" exact component={Navbar} />
    <Route path ="/register" exact component={Register} />

    <Route path ="/appointment/:id" exact component={Navbar} />
    <Route path ="/appointment/:id" exact component={CreateAppointment} />

    <Route path ="/tutorview/:tutorid" exact component={Navbar} />
    <Route path ="/tutorview/:tutorid" exact component={TutorView} />
  </Router>
  );
}

export default App;
