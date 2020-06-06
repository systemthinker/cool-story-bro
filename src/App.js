import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import HomePageDetails from './pages/HomePageDetails'
import Mypage from './components/MyPage'


import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import { selectToken } from "./store/user/selectors"
import { Jumbotron } from "react-bootstrap";


const Home = () => (
  
  <Jumbotron>
    <h1>Home</h1>
    
  </Jumbotron>
  
);
const Other = () => (
  <Jumbotron>
    <h1>Other</h1>
  </Jumbotron>
);

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);
  const isLoggedIn = useSelector(selectToken)

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      {isLoggedIn ? <Mypage /> : null}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/other" component={Other} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route exact path="/homepages" component={HomePage} />
        <Route path="/homepages/:id" component={HomePageDetails} />
        
      </Switch>
    </div>
  );
}

export default App;
