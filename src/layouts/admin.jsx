import React from 'react'
import '../css/AdminProfile.css'
const Admin = () => {
  return (
    <div>
    {/* 

Project Group: 5

Project Group Members: Vaibhavi Arjunwadkar (1001826818)
                   Sashidhar Boyapati (1002087319)
                   Hema Sai Desai (1002029973)
                   Hemanth Reddy Gillela (1002033611)
                   Smrithi Gujjula (1002073701) 

*/}

    <div className="container">
      <div className="row">
        <div className="sidebar">
          <div className="logo">
            <a href="../home.html"><img src="../../images/logo.jpeg" alt="Home" className="home-icon" /></a>
            <hr />
          </div>
          <ul>
            <li>
              <a href="#" className="active">
                <span className="item"><h2>ADMIN</h2></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="item">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="item">Account</span>
              </a>
            </li>
            <li>
              <a href="Student.html">
                <span className="item">Students</span>
              </a>
            </li>
            <li>
              <a href="Instructor.html">
                <span className="item">Instructor</span>
              </a>
            </li>
            <li>
              <a href="ProgramCord.html">
                <span className="item">Coordinator</span>
              </a>
            </li>
            <li>
              <a href="ProgramCord.html">
                <span className="item">QA-Officer</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="item">Reports</span>
              </a>
            </li>
            <li>
              <a href="../login.html">
                <span className="item">Logout</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="content">
          <div className="admins-items">
            <div className="dropdown">
              <div className="dropdown-header">
                Students <span className="chevron-icon"><i className="fa fa-chevron-down" /></span>
              </div>
              <div className="dropdown-body">
                <div className="dropdown-item">
                  Manage Students
                </div>
                <div className="dropdown-item">
                  Manage Course
                </div>
                <div className="dropdown-item">
                  Manage Permissions
                </div>
                <div className="dropdown-item">
                  Reports
                </div>
                <div className="dropdown-item">
                  Performance
                </div>
              </div>
            </div>
            <div className="dropdown">
              <div className="dropdown-header">
                Co-ordinator <span className="chevron-icon"><i className="fa fa-chevron-down" /></span>
              </div>
              <div className="dropdown-body">
                <div className="dropdown-item">
                  Manage Co-ordinator
                </div>
                <div className="dropdown-item">
                  Handle Course
                </div>
                <div className="dropdown-item">
                  Manage Permissions
                </div>
                <div className="dropdown-item">
                  Assign Students
                </div>
                <div className="dropdown-item">
                  Reviews
                </div>
              </div>
            </div>
            <div className="dropdown">
              <div className="dropdown-header">
                QA-Officer <span className="chevron-icon"><i className="fa fa-chevron-down" /></span>
              </div>
              <div className="dropdown-body">
                <div className="dropdown-item">
                  Manage QA-Officer
                </div>
                <div className="dropdown-item">
                  Assign Course
                </div>
                <div className="dropdown-item">
                  Handle permissions
                </div>
                <div className="dropdown-item">
                  Reports
                </div>
                <div className="dropdown-item">
                  Performance
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="footer">
          @ 2023 SKILLIFY, INC
        </div>
      </div>
    </div>
  </div>
  )
}

export default Admin