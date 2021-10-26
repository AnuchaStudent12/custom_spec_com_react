
import './App.css';
import Hexpage from './components/Hexpage';
import Home from './components/Home'
import EditorPage from './components/EditorPage'
import ManagerPage from './components/ManagerPage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
  FormControl
} from "react-bootstrap";
function App() {
  return (
    
    <div className="wrapper">
      
      <BrowserRouter>
        <Switch>
          <Route path="/manager">
            <ManagerPage />
          </Route>
          <Route path="/editor">
            <EditorPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
