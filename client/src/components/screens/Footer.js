import React from "react"

const Footer=()=>{
    return(
<footer>
    <div className="container-fluid p-0">
      <div className="row text-left">
        <div className="col-md-5 col-sm-5">
          <h4 className="text-light">About us</h4>
          <p className="text-muted">Big-Brains provides a cost-free tribune that allows the questioner to post his/her question or to share insightful ideas, resources, or his/her exploration related to the concerned subject. </p>
          <p className="pt-4 text-muted">Copyright ©2020 All rights reserved |
            <span> Big Brains</span>
          </p>
        </div>
        <div className="col-md-5 col-sm-12">
          <h4 className="text-light">Newsletter</h4>
          <p className="text-muted">Stay Updated</p>
          <form className="form-inline">
            <div className="col pl-0">
              <div className="input-group pr-5">
                <input type="text" className="form-control bg-dark text-white" id="inlineFormInputGroupUsername2" placeholder="Email" />
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-2 col-sm-12">
          <h4 className="text-light">Follow Us</h4>
          <p className="text-muted">Let us be social</p>
          <div className="column text-light">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>
    </div>
  </footer>
    )
}

export default Footer;