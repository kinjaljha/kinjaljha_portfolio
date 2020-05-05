
import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt="" src="images/portfolio/org2.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Task Manager</h5>
                        <p>APIs</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt="" src="images/portfolio/org1.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Jobs Portal</h5>
                        {/* <p>Frontend </p> */}
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt="" src="images/portfolio/origami.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Student Management</h5>
                        <p>Demo Project</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              {/* <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt="" src="images/portfolio/org3.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Coffee</h5>
                        <p>Illustrration</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> item end */}

            </div> {/* portfolio-wrapper end */}

          </div> {/* twelve columns end */}
          {/* Modal Popup
	      --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/org2.jpg" alt="" />
            <div className="description-box">
              <h4>Task Manager</h4>
              <p>A backend project including API for create/update/delete functionalities in Express JS, data is maintained in MongoDB, Mongoose for scheme definition, and Chai, Mocha for unit testcasing</p>
              <span className="categories"><i className="fa fa-tag" />Backend API</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/kinjaljha/task_manager" target='_blank'>Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/org1.jpg" alt="" />
            <div className="description-box">
              <h4>Jobs Portal</h4>
              <p>A job Portal to enlist jobs fetched from github API(on regular intervals) and apply for the same. 
                Technologies used : Reactjs, Cron jobs, Redis, Nodejs </p>
              <span className="categories"><i className="fa fa-tag" />Frontend, Backend</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/kinjaljha/JobPortal" target='_blank'>Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/origami.jpg" alt="" />
            <div className="description-box">
              <h4>Student Management</h4>
              <p>Provides functionality of staff allocation classes to the students. Technologies used : Nodejs, Mongo DB</p>
              <span className="categories"><i className="fa fa-tag" />Backend API</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/kinjaljha/AtoZStudentManagementPortal" target='_blank'>Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}
          {/* <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-coffee.jpg" alt="" />
            <div className="description-box">
              <h4>Coffee Cup</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>modal-04 End */}

        </div> {/* row End */}

      </section> {/* Portfolio Section End*/}
      </React.Fragment>
    );
  }
}
