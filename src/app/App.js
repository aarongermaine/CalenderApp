import '../styles/App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from '../components/Login/'
import Register from '../components/Register/'

function App() {
  return (
  <Router>
    <Login></Login>
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
  </Router>
  );
}

export default App;
