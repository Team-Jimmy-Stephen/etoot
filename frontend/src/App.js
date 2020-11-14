import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from "react-router-dom"
import TutorList from "./components/tutor-list"
import Login from "./components/login"
import Register from "./components/register"
import CreateAppointment from "./components/create-appointment"
import Navbar from "./components/navbar.component"
import landingpage from "./components/landingpage"

function App() {
  return (
    <Router>
    <Route path ="/" exact component={landingpage} />
    
    <Route path ="/Home" exact component={Navbar} />
    <Route path ="/Home" exact component={TutorList} />

    <Route path ="/login" exact component={Navbar} />
    <Route path ="/login" exact component={Login} />

    <Route path ="/register" exact component={Navbar} />
    <Route path ="/register" exact component={Register} />

    <Route path ="/appointment" exact component={Navbar} />
    <Route path ="/appointment" exact component={CreateAppointment} />
  </Router>
  );
}

export default App;
