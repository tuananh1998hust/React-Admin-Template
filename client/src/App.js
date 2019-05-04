import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Row, Col } from "reactstrap";
import { Provider } from "react-redux";

// Pages
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Products from "./pages/Products";
import Todos from "./pages/Todos";
import Employees from "./pages/Employees";

// Components
import AppNavbar from "./components/AppNavbar";
import Sidebar from "./components/Sidebar";

// store
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <AppNavbar />
          <Row>
            <Col sm="12" md="2">
              <Sidebar />
            </Col>
            <Col className="p-5" sm="12" md="10">
              <Route exact path="/" component={Home} />
              <Route path="/orders" component={Orders} />
              <Route path="/customers" component={Customers} />
              <Route path="/products" component={Products} />
              <Route path="/employees" component={Employees} />
              <Route path="/todos" component={Todos} />
            </Col>
          </Row>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
