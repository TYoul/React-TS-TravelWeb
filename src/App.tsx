import React from 'react';
import styles from './App.module.css';

// 三方插件
import {BrowserRouter,Route,Switch} from "react-router-dom";

// 组件
import HomePage from "./pages/home/HomePage";
import SignInPage from "./pages/signInPage/SignInPage";
import RegisterPage from "./pages/register/RegisterPage";
import Detail from "./pages/detail/Detail";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/signIn" component={SignInPage}/>
          <Route path="/register" component={RegisterPage}/>
          <Route path="/detail/:touristRouteId" component={Detail}/>
          <Route component={()=><h1>404</h1>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
