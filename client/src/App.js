import React from "react"
import {BrowserRouter,Route} from "react-router-dom"
import NavBar from "./components/Navbar"
import Home from "./components/screens/Home"
import Profile from "./components/screens/Profile"
import SignIn from "./components/screens/SignIn"
import SignUp from "./components/screens/SignUp"



function App() {
  return (
    <BrowserRouter>
   <NavBar />
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/SignIn">
      <SignIn />
    </Route>
    <Route path="/SignUp">
      <SignUp />
    </Route>
    <Route path="/Profile">
      <Profile />
    </Route>


   </BrowserRouter>
  );
}

export default App;