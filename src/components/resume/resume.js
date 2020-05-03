import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        {/*generated code*/}
        <section id='resume'>
          {/* Education
      ----------------------------------------------- */}
          <div className='row education'>
            <div className='three columns header-col'>
              <h1>
                <span>Education</span>
              </h1>
            </div>
            <div className='nine columns main-col'>
              <div className='row item'>
                <div className='twelve columns'>
                  <h3>Dharm Sinh Desai University, Nadiad, Gujarat</h3>
                  <p className='info'>
                    B. Tech. in Computer Science and Engineering<span>•</span> <em className='date'>2013 - 2017</em>
                  </p>
                  <p></p>
                </div>
              </div>{' '}
              {/* item end */}
              <div className='row item'>
                <div className='twelve columns'>
                  <h3>Reliance School</h3>
                  <p className='info'>
                    Secondary and Senior Secondary Education<span>•</span> <em className='date'>2009 - 2012</em>
                  </p>
                  <p></p>
                </div>
              </div>{' '}
              {/* item end */}
            </div>{' '}
            {/* main-col end */}
          </div>{' '}
          {/* End Education */}
          {/* Work
      ----------------------------------------------- */}
          <div className='row work'>
            <div className='three columns header-col'>
              <h1>
                <span>Work</span>
              </h1>
            </div>
            <div className='nine columns main-col'>
              <div className='row item'>
                <div className='twelve columns'>
                  <h3>Volansys Technologies</h3>
                  <p className='info'>
                    Software Engineer <span>•</span> <em className='date'>June 2019 - Present</em>
                  </p>
                  <p>
                    Worked in backend API designing and development using Nodejs, MongoDB, Redis CLI, AWS(Python Lambda Service). Currently working on
                    Industrial Internet Of Things project for refrigeration devices of comercial/residential devices using React JS, Redux, Web
                    Services, MongoDB, MQTT, Google Location API.
                  </p>
                </div>
              </div>{' '}
              {/* item end */}
              <div className='row item'>
                <div className='twelve columns'>
                  <h3>Infosys Limited</h3>
                  <p className='info'>
                    Systems Engineer <span>•</span> <em className='date'>July2017 – June 2019</em>
                  </p>
                  <p>
                    System Engineer - Infosys Limited(Pune, India)
                    <ul>
                      <li>
                        Finacle Solutions: Worked on Finacle Core Banking Solutions by Edge Verve Ltd, as a part of FEBA Customization team, worked
                        with Java and Unix
                      </li>
                      <li>
                        Deutsche Bank Project: Worked in Front End Automation, handled OCC and I-Cape applications. Worked with Java, Eclipse, BDD
                        Cucumber, ALM
                      </li>
                      <li>
                        Proximus Solutions: Implemented SV module which accepts device installation details(XML) and create response based on nearest
                        service provider
                      </li>
                    </ul>
                  </p>
                </div>
              </div>{' '}
              {/* item end */}
            </div>{' '}
            {/* main-col end */}
          </div>{' '}
          {/* End Work */}
          {/* Skills
      ----------------------------------------------- */}
          <div className='row skill'>
            <div className='three columns header-col'>
              <h1>
                <span>Skills</span>
              </h1>
            </div>
            <div className='nine columns main-col'>
              <p>
                <h5>Languages and Frameworks</h5>
                C, JavaScript, Python, PHP, Node JS, React JS<br></br>
                <h5>Databases</h5>
                MySQL, MongoDB, Redis<br></br>
                <h5>Tools</h5>
                Git, Jenkins, JIRA, Eclipse IDE, Android Studio, NetBeans IDE, 
                Visual Studio, Soap UI, Ca-lisa, ALM, Parasoft Virtualize
                , Pycharm, BDD Cucumber, Latex, Toad, MATLAB, AWS

                <br></br>
              </p>
              {/* <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
                <li><span className="bar-expand illustrator" /><em>Illustrator</em></li>
                <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>
                <li><span className="bar-expand css" /><em>CSS</em></li>
                <li><span className="bar-expand html5" /><em>HTML5</em></li>
                <li><span className="bar-expand jquery" /><em>jQuery</em></li>
              </ul>
            </div>{/* end skill-bars */}
            </div>{' '}
            {/* main-col end */}
          </div>{' '}
          {/* End skills */}
        </section>{' '}
        {/* Resume Section End*/}
      </React.Fragment>
    );
  }
}
