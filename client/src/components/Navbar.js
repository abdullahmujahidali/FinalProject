import React,{useContext} from "react";
import {Link,useHistory} from "react-router-dom"
import logo from "./assets/logosmwhite.png"
import {UserContext} from "../App"


export default function Navbar(props) {
  const {state,dispatch}=useContext(UserContext)
  const history=useHistory()
  const renderList=()=>{
    if(state){
      return[
        <li className="flex items-center">
      <Link
        className={
          (props.transparent
            ? "lg:text-white lg:hover:text-blue-500 text-blue-500"
            : "text-white hover:text-gray-600") +
          " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        } 
        to="/home"
      >
        HOME
       
      </Link>
    </li>,
    <li className="flex items-center">
    <Link
      className={
        (props.transparent
          ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
          : "text-white hover:text-gray-600") +
        " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
      }
      to="/profile"
    >
     PROFILE
    </Link>
  </li>,

    <li className="flex items-center">
      <Link
        className={
          (props.transparent
            ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
            : "text-white hover:text-gray-600") +
          " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        }
        to="/create"
      >
       CREATE POST  
     
      </Link>
    </li>,

    <li className="flex items-center">
      <Link
        className={
          (props.transparent
            ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
            : "text-white hover:text-gray-600") +
          " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        }
        to="/myfollowerspost"
      >
       FOLLOWINGS POSTS
      </Link>
    </li>,

    <li className="flex items-center">
      <button
        className={
          (props.transparent
            ? "bg-black text-gray-800 active:bg-gray-100"
            : "bg-orange-500 text-black active:bg-white") +
          " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
        }
        type="button"
        style={{ transition: "all .15s ease" }}
      >
       <Link to="/" onClick={()=>{
          localStorage.clear()
          dispatch({type:"CLEAR"})
          history.push("/")
       }
       }> <i className="fas fa-sign-in-alt "></i> 
      
       LOG OUT</Link>
      </button>
    </li>
      ]
    }
    else{
      return [
      <li className="flex items-center">
      <a
        className={
          (props.transparent
            ? "lg:text-white lg:hover:text-blue-500 text-blue-500"
            : "text-black hover:text-blue-500") +
          " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        }
        href="https://www.linkedin.com/in/abdullah-mujahid-211849186/"
      >
        <i
          className={
            (props.transparent
              ? "lg:text-blue-500 text-blue-500"
              : "text-blue-500") +
            " fab fa-linkedin text-lg leading-lg "
          }
        />
        <span className="lg:hidden text-white inline-block ml-2">Linkedin</span>
      </a>
    </li>,

    <li className="flex items-center">
      <a
        className={
          (props.transparent
            ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
            : "text-gray-800 hover:text-gray-600") +
          " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        }
        href="https://twitter.com/abdulladgaf"
      >
        <i
          className={
            (props.transparent
              ? "lg:text-red-300 text-red-500"
              : "text-red-500") +
            " fab fa-twitter text-lg leading-lg "
          }
        />
        <span className="lg:hidden text-white inline-block ml-2">Tweet</span>
      </a>
    </li>,

    <li className="flex items-center">
      <a
        className={
          (props.transparent
            ? "lg:text-white lg:hover:text-white text-white"
            : "text-white hover:text-white") +
          " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        }
        href="https://github.com/abdullahmujahidali"
      >
        <i
          className={
            (props.transparent
              ? "lg:text-gray-300 text-gray-500"
              : "text-gray-500") +
            " fab fa-github text-lg leading-lg "
          }
        />
        <span className="lg:hidden inline-block ml-2">Github</span>
      </a>
    </li>,

    <li className="flex items-center">
      <button
        className={
          (props.transparent
            ? "bg-black text-gray-800 active:bg-gray-100"
            : "bg-orange-500 text-black active:bg-white") +
          " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
        }
        type="button"
        style={{ transition: "all .15s ease" }}
      >
       <Link to="/signin "> <i className="fas fa-sign-in-alt "></i> SIGN IN</Link>
      </button>
    </li>
      ]
    }
  }
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav
        className={
          (props.transparent
            ? "top-0 absolute z-50 w-full"
            : "relative shadow-lg bg-black text-white shadow-lg") +
          " flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
        }
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
 
            <Link
              className={
                (props.transparent ? "text-white" : "text-white-800") +
                " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
              }
              to={state?"/home":"/"} 
            >
            <img src={logo} alt="logo" height="60" width="60" />
             </Link>
             

            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i
                className={
                  (props.transparent ? "text-white" : "text-gray-800") +
                  " fas fa-bars"
                }
              ></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-black lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {renderList()}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
