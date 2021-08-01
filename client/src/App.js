import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import AddOn from "./pages/AddOn";
import AddForm from "./pages/AddForm";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/add">
          <Navbar />
          <AddForm />
        </Route>
        <Route path="/login">
          <Navbar />
          <Login />
        </Route>
        <Route path="/">
          <Navbar />
          <AddOn />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
