import './App.css';
import {Col,Container,Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, useHistory, Switch } from 'react-router-dom'
import Footer  from "./Components/Footer/Footer";
import Home from './Components/MainMenu/MainMenu';
import RightMenu from './Components/RightMenu/RightMenu';
import LeftMenu from './Components/LeftMenu/LeftMenu'


const Routing = ()=>{
  return(
    <Switch>
      <Route path="/" exact >
        {/* main menu */}
        <Home></Home>
      </Route>
      <Route path="/service" exact>
        {/* Service */}
        <h1>Services</h1>
      </Route>
      <Route path="/edu" exact>
        {/* education */}
        <h1>education</h1>
      </Route>
      <Route path="/portfolio">
        {/* portfolio */}
        <h1>portfolio</h1>
      </Route>
      <Route path="/blog">
        {/* blog */}
        <h1>Blog</h1>
      </Route>
      <Route path="/contact">
        {/* contact */}
        <h1>contact</h1>
      </Route>
    </Switch>
  )
}
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container fluid>
          <Row> 
            <Col md={3}>
              {/* Left Sidebar */}
              <LeftMenu></LeftMenu>
            </Col>
            <Col md={8}>
              {/* Main menu */}
                <Routing></Routing>
              <Footer></Footer>
            </Col>
            <Col md={1}>
              {/* Right menu */}
                <RightMenu/>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
