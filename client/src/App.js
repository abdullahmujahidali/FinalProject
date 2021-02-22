import React, { createContext,useReducer,useEffect,useContext } from "react"
import { BrowserRouter, Route, Switch,useHistory } from "react-router-dom"
import NavBar from "./components/Navbar"
import Home from "./components/screens/Home"
import Profile from "./components/screens/Profile"
import SignIn from "./components/screens/SignIn"
import Post from "./components/screens/Post"
import UserProfile from "./components/screens/UserProfile"


import SignUp from "./components/screens/SignUp"
import MainHome from "./components/screens/PostHome"
import CreatePost from "./components/screens/CreatePost"
import {reducer,initialState} from "./reducers/userReducer"

export const UserContext = createContext()

const Routing = () => {
  const history = useHistory()
  const {state,dispatch} =useContext(UserContext)
  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
      history.push("/PostHome")
    }
    else{
      history.push("/")
    }
  },[history,dispatch])
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/SignIn">
        <SignIn />
      </Route>
      <Route path="/SignUp">
        <SignUp />
      </Route>
      <Route exact path="/Profile">
        <Profile />
      </Route>
      <Route exact path="/PostHome">
        <MainHome />
      </Route>
      <Route path="/create">
        <CreatePost />
      </Route>
      <Route path="/post">
        <Post />
      </Route>
      <Route path="/profile/:userid">
        <UserProfile />
      </Route>
    </Switch>
  )
}

function App() {
  const [state,dispatch]= useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <NavBar />
      <Routing />
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
