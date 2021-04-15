import React,{useContext,useRef,useEffect,useState} from "react";
import {Link,useHistory} from "react-router-dom"
import logo from "./assets/logosmwhite.png"
import {UserContext} from "../App"


export default function Navbar(props) {
  const [email, setEmail] = useState("")
  const [userDetails, setUserDetails]= useState([])
  const searchModal  = useRef(null)
  const [showModal, setShowModal] = React.useState(false);
  const {state,dispatch}=useContext(UserContext)
  const history=useHistory()
  useEffect(()=>{

  },[])
  const renderList=()=>{
    if(state){
      return[
        <li key="1" className="flex items-center">
         <button
        className=""
        type="button"
        onClick={() => setShowModal(true)}
      >

      <li
        className={
          (props.transparent
            ? "lg:text-white lg:hover:text-blue-500 text-blue-500"
            : "text-black hover:text-blue-500") +
          " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        }
        href=""
      >
        <i 
          className={
            (props.transparent
              ? "lg:text-blue-500 text-blue-500"
              : "text-blue-500") +
            " fas fa-search text-lg leading-lg "
          }
        />
        <span className="lg:hidden text-white inline-block ml-2">Search</span>
      </li>
      </button>

    </li>,
        <li key="2" className="flex items-center">
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
    <li key="3" className="flex items-center">
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

    <li key="4" className="flex items-center">
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

    <li key="5" className="flex items-center">
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
    <li key="6" className="flex items-center">
      <Link
        className={
          (props.transparent
            ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
            : "text-white hover:text-gray-600") +
          " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        }
        to="/subjectpost"
      >
       SUBJECT POSTS
      </Link>
    </li>,

    <li key="7" className="flex items-center">
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
      <li key="1" className="flex items-center">
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

    <li key="2" className="flex items-center">
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

    <li key="3" className="flex items-center">
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

    <li key="4" className="flex items-center">
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
  const fetchUsers=(query)=>{
    setEmail(query)
    fetch("/search-users",{
      method:"post",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query
      })
    }).then(res=>res.json())
    .then(results=>{
      setUserDetails(results.user)
    })
  }

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
    
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
            ref={searchModal}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold">
                    Search a User!
                  </h3>
                  
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                  
                </div>

                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t ">
                  <h2>Enter email to search a user! </h2> </div>
                  
                {/*body*/}
                <input
                          type="email"
                          value={email}
                          onChange={(e) => fetchUsers(e.target.value)}
                          className="px-8 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                          placeholder="Search User"
                          style={{ transition: "all .15s ease" }}
                        />
                <div className="relative p-6 flex-auto ">
                <ul className="collection "style={{width: "100%"}}>
                {userDetails.map(item=>{
                  return <Link to= {item._id !== state._id  ? "/profile/"+item._id: "/profile"} onClick={()=>{
                    setEmail('')
                    setShowModal(false)
                  }}> <li className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">{item.name}</li></Link>
                })}

                  </ul>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );

  
}

