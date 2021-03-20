import './App.css';
import { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login';
import Trains from './Components/Trains/Trains';
import Cars from './Components/Cars/Cars';
import Bikes from './Components/Bikes/Bikes';
import Buses from './Components/Buses/Buses';
import Notfound from './Components/NotFound/Notfound';


export const userCommonData = createContext();

function App() {
  const [userLog, setUserLog] = useState({});
  return (
    <div className="App">
      <userCommonData.Provider value={[userLog, setUserLog]}>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home"><Home></Home></Route>
            <PrivateRoute path="/destination/car"><Cars></Cars></PrivateRoute>
            <PrivateRoute path="/destination/bus"><Buses></Buses></PrivateRoute>
            <PrivateRoute path="/destination/bike"><Bikes></Bikes></PrivateRoute>
            <PrivateRoute path="/destination/train"><Trains></Trains></PrivateRoute>
            <Route path="/login"><Login></Login></Route>
            <Route exact path="/"><Home></Home></Route>
            <Route path="*"><Notfound></Notfound></Route>
          </Switch>
        </Router>
      </userCommonData.Provider>
    </div>
  );
}

export default App;
