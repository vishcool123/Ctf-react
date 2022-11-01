import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Challenges from "./Components/Challenges";
import Task1 from "./Components/warmup/Task1";
import Task2 from "./Components/warmup/Task2";
import Task3 from "./Components/warmup/task3";
import EasyTask1 from "./Components/easy/easyTask1";
import EasyTask2 from "./Components/easy/Task2";
import EasyTask3 from "./Components/easy/task3";
import EasyTask4 from "./Components/easy/Task4";
import EasyTask5 from "./Components/easy/Task5";
import EasyTask6 from "./Components/easy/Task6";
function App() {
  useEffect(() => {
    window.addEventListener('unload', handleTabClosing)
    return () => {
      window.removeEventListener('unload', handleTabClosing)
    }
  })
  const handleTabClosing = () => {
    window.localStorage.removeItem("account")
  }

  return (
    <div>
      <Header />
      <Switch>
        {/* <Route path="/latest" exact render={(props) => <Latest />} />
        <Route path="/upcoming" exact render={(props) => <Upcomimg />} />
        <Route path="/now-playing" exact render={(props) => <NowPlaying />} />
        <Route path="/movie/:id" exact render={(props) => <MovieDetail />} /> */}
        <Route path="/" exact render={(props) => <Home />} />
        <Route path="/Challenges" exact render={(props) => <Challenges />} />
        <Route path="/warmup/task1" exact render={(props) => <Task1 />} />
        <Route path="/warmup/task2" exact render={(props) => <Task2 />} />
        <Route path="/warmup/task3" exact render={(props) => <Task3 />} />
        <Route path="/easy/task1" exact render={(props) => <EasyTask1 />} />
        <Route path="/easy/task2" exact render={(props) => <EasyTask2 />} />
        <Route path="/easy/task3" exact render={(props) => <EasyTask3 />} />
        <Route path="/easy/task4" exact render={(props) => <EasyTask4 />} />
        <Route path="/easy/task5" exact render={(props) => <EasyTask5 />} />
        <Route path="/easy/task6" exact render={(props) => <EasyTask6 />} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
