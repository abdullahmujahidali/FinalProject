import React, { createContext, useReducer, useEffect, useContext } from "react"
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom"

import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "./components/Navbar"
import Landing from "./components/screens/Landing"
import Signin from "./components/screens/Signin"
import Signup from "./components/screens/Signup"
import Profile from "./components/screens/Profile"
import UserProfile from "./components/screens/UserProfile"
import PostHome from "./components/screens/PostHome"
import Post from "./components/screens/Post"
import Subscribed from "./components/screens/SubscribedPost"
import Reset from "./components/screens/Reset"
import NewPassword from "./components/screens/NewPassword"

import CreatePost from "./components/screens/CreatePost"
import { reducer, initialState } from "./reducers/userReducer"

export const UserContext = createContext()
const Routing = () => {
  const history = useHistory()
  const {dispatch } = useContext(UserContext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) {
      dispatch({ type: "USER", payload: user })
      history.push("/home")

    }
    else {
      if(!history.location.pathname.startsWith('/reset')){
        // history.push("/")
      }
     
    }
  }, [history, dispatch])
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>

      <Route path="/signin">
        <Signin />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/post/:postid">
        <Post />
      </Route>

      <Route exact path="/profile">
        <Profile />
      </Route>

      <Route path="/profile/:userid">
        <UserProfile />
      </Route>

      <Route path="/home">
        <PostHome />
      </Route>

      <Route path="/myfollowerspost">
        <Subscribed />
      </Route>

      <Route path="/create">
        <CreatePost /> 
      </Route>

      <Route exact path="/reset">
        <Reset />
      </Route>

      <Route path="/reset/:token">
        <NewPassword />
      </Route>

    </Switch>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <NavBar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>);
}

export default App;
