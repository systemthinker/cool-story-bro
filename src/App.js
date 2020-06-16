import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import HomePages from "./pages/HomePages";
import HomePageDetails from './pages/HomePageDetails'

import MyHomePage from './pages/MyHomePage'


import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";







function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);
  
  

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      
      <Switch>
        <Route exact path="/" component={HomePages} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/myhomepage/:id" component={MyHomePage} />
        <Route path="/homepages/:id" component={HomePageDetails} />
        
      </Switch>
    </div>
  );
}

export default App;
