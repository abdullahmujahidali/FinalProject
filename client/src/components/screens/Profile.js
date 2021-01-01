import React from "react"
import {Link} from "react-router-dom"

const Profile =()=>{
    return (
        <>
         <section class="container">


      <div class="profile-grid my-1">
       
        <div class="profile-top bg-dark p-2">    
          <img
            class="round-img my-1"
            src="https://avatars2.githubusercontent.com/u/48271080?s=460&u=0e1e494ab51f5a98750cbd571b113ada34daa8b2&v=4"  
            alt=""
          />
          <h1 class="large">Addy Paladin</h1>
          {/* <p class="lead">Developer at Microsoft</p>
          <p>Seattle, WA</p> */}
          <div class="icons my-1" style={{display:"flex", justifyContent:"space-betweens"}}>
          <h6 style={{  marginRight:"16px"}}>40 posts </h6>
          <h6  style={{  marginRight:"16px"}}>109K followers </h6>
          <h6>11 followings</h6>
          
          </div>
        </div>

        <div class="profile-about bg-light p-2">
          <h2 class="text-primary">Abdullahs's Bio</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
            doloremque nesciunt, repellendus nostrum deleniti recusandae nobis
            neque modi perspiciatis similique?
          </p>
          <div class="line"></div>
          <h2 class="text-primary">Skill Set</h2>
        </div>

        <div class="profile-exp bg-white p-2">
          <h2 class="text-primary" >POSTS</h2>
          <div>
            <h3 class="text-dark">Microsoft</h3>
            <p>Oct 2011 - Current</p>
            <p><strong>Position: </strong>Senior Developer</p>
            <p>
              <strong>Description: </strong>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
              ipsam, sapiente suscipit dicta eius velit amet aspernatur
              asperiores modi quidem expedita fugit.
            </p>
          </div>
          <div>
            <h3 class="text-dark">Sun Microsystems</h3>
            <p>Nov 2004 - Nov 2011</p>
            <p><strong>Position: </strong>Systems Admin</p>
            <p>
              <strong>Description: </strong>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
              ipsam, sapiente suscipit dicta eius velit amet aspernatur
              asperiores modi quidem expedita fugit.
            </p>

          </div>
          <div>
            <h3 class="text-dark">Sun Microsystems</h3>
            <p>Nov 2004 - Nov 2011</p>
            <p><strong>Position: </strong>Systems Admin</p>
            <p>
              <strong>Description: </strong>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
              ipsam, sapiente suscipit dicta eius velit amet aspernatur
              asperiores modi quidem expedita fugit.
            </p>

          </div>
        </div>

  


      </div>
    </section>

    </>
    )
}

export default Profile