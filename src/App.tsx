import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PasswordChange from "./pages/My/PasswordChange";
import { Detail as IllegalDataDetail, Distribution } from './pages/illegal-data/Detail'
import RegisterForm from './pages/register/Form'

function App() {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Switch>
          <Route path={'/home'} component={Home} />
          <Route path={'/login'} component={Login} />
          <Route path={'/change-password'} component={PasswordChange} />
          <Route path={'/illegal-data/detail'} component={IllegalDataDetail} />
          <Route path={'/illegal-data/distribution'} component={Distribution} />
          <Route path={'/illegal-data/register/form'} component={RegisterForm} />

          <Redirect to={'/home'} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
