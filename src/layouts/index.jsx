/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import logo from '../imgs/logo.jpeg'
import home from '../imgs/home.jpg'
import { Link } from 'react-router-dom'


const Index = () => {
    return (
        <div>


            <div className="header">
                <a href="home.html"><img src={logo} alt="Home" className="home-icon" /></a>
                <div className="header-nav">
                    <Link to={'/about-us'}>About</Link>
                    <a href="contactUs.html">Contact Us</a>
                    <a href="signUp.html">Sign Up</a>
                    <a href="login.html">Login</a>
                </div>
            </div>
            <div className="content-container">
                <h1>DATA SCIENCE</h1>
                <h2>MASTER OF SCIENCE DEGREE PROGRAM</h2>
                <a href="courseCatalog.html" className="course-button">View Course Catalog</a>
            </div>
            <div className="body1-container">
                <div className="course-description">
                    <p>
                        Master of Science degree in Data Science helps meet the growing need for data science professionals in
                        STEM, health-related and other fields, expanding students’ marketable skills and preparing them to enter
                        a fast-growing job field.<br />
                        The program is unique for its breadth, offering a widely encompassing set of courses that allows
                        students without a computer science background to develop the necessary skills for data science jobs in
                        business, engineering, healthcare and science settings. It aims to instill the acumen needed to draw
                        insights from data, to make sound decisions using data, and to effectively communicate about data-driven
                        findings and decisions.</p>
                    <p>
                        Students will use real-world problems, methods and data in instruction materials through collaboration
                        with community partners; problem-based, experiential learning which emphasizes hands-on coding
                        exercises; service learning in which students learn while doing for social good; and inclusive learning
                        to broaden student participation and strengthen student retention in data science education.<br />
                        The degree requires 30 course hours and can be completed in two years. After completion of a set of core
                        courses, students choose to pursue a specialty in either the engineering track (computer science or
                        industrial engineering) or the science track (biology, geology, mathematics, or psychology). They will
                        participate in a required capstone experience which can be integrated with workplace projects. Elective
                        options offer additional flexibility to craft a degree that fits his or her specific situation.<br />
                        Students will come from different backgrounds, but the most important factor for their growth and
                        success will be a keen interest in learning the powerful ways in which data can be applied in various
                        fields.
                    </p>
                    <h4>
                        Notes:
                    </h4>
                    <p>
                        In general, an applicant who graduated with a Bachelor’s degree from an accredited U.S. or ABET
                        institution within the last three years with a GPA of 3.2 or better on a 4.0 scale and who is currently
                        conducting professional work in related fields should contact the MSDS graduate advisor about the
                        possibility of GRE wavier. Such waivers are not offered by all graduate programs.<br />
                        Applications with significant deficiencies in college-level mathematics may be deferred/denied as
                        determined by the MSDS program advisors.<br />
                        If an applicant has a degree from a U.S. institution, the English Proficiency requirement on TOEFL/IELTS
                        is waived. However, it is waived for admission purposes only. If the applicant wishes to be considered
                        for possible funding as a Graduate Teaching Assistant (GTA) or have any teaching responsibility, the
                        applicant must have a U.S. bachelor’s degree or a TOEFL speaking score of at least 23, or an IELTS
                        speaking score of at least 7. A master’s degree from a U.S. institution does not suffice for a waiver of
                        the English proficiency requirement for international applicants desiring consideration for GTA support.
                        An applicant who does not achieve the stated English proficiency standards may be required to take the
                        Graduate English Skills Program (GESP) qualifying exam upon arrival at UTA to determine the need for
                        additional English language courses after admission.<br />
                        Only the following application documents are required: application, fee, transcripts from all higher
                        education institutions attended, and GRE and TOEFL scores unless they are waived. The MSDS program
                        neither requires nor reviews letters of recommendation, statements of purpose, or any other supplemental
                        materials from applicants.
                    </p>
                </div>
                <div className="course-image">
                    <img src={home} alt="Data Science Course" />
                </div>
            </div>
            <div className="body2-container">
                <p>
                    Master of Science degree in Data Science helps meet the growing need for application-oriented
                    engineers who can use data science tools and techniques to solve complex problems in industries such as
                    manufacturing, logistics, healthcare and energy.<br />
                    The program is unique for its breadth, offering a widely encompassing set of courses that allows students
                    with or without a programming background to develop the necessary data science skills. It aims to instill
                    the acumen needed to draw insights from data, to make sound decisions using data, and to effectively
                    communicate about data driven findings and decisions.<br />
                    Students will use real-world problems, methods and data in instruction materials through collaboration with
                    community partners; problem-based, experiential learning
                    which emphasizes hands-on coding exercises; service learning in which students learn while doing for social
                    good; and inclusive learning to broaden student participation and strengthen student retention in data
                    science education.<br />
                    The degree requires 30 course hours and can be completed in two years. After completion of a set of core
                    courses, students may choose electives from multiple
                    programs to match their career interests. They may also participate in a capstone experience which can be
                    integrated with workplace projects. Elective options offer additional flexibility to craft a degree that
                    fits his or her specific situation.<br />
                    Students will come from different backgrounds, but the most important factor for their growth and success
                    will be a keen interest in learning the powerful ways in which data can be applied in various fields.
                </p>
            </div>
            {/* Footer code */}
            <div className="footer-container">
                {/* Column 1: Logo */}
                <div className="footer-column-logo">
                    <img src={logo} alt="Logo" className="footer-logo" />
                </div>
                {/* Column 2: Links */}
                <div className="footer-column">
                    <a href="home.html">Home</a>
                    <a href="aboutUs.html">About</a>
                    <a href="contactUs.html">Contact Us</a>
                    <a href="signUp.html">Sign Up</a>
                    <a href="login.html">Login</a>
                </div>
                {/* Column 3: Links */}
                <div className="footer-column">
                    <a href="#">Accesibility Information</a>
                    <a href="#">Copyrignt notice</a>
                    <a href="#">T &amp; Cs</a>
                    <a href="#">Privacy</a>
                    <a href="#">Report Issues</a>
                </div>
                {/* Column 4: Newsletter */}
                <div className="footer-column">
                    <p>Get Your Newsletter</p>
                    <div className="newsletter-container">
                        <input type="email" placeholder="Enter your email" />
                        <button>Subscribe</button>
                    </div>
                    <div className="social-icons">
                        <a href="#" className="fa fa-facebook" />
                        <a href="#" className="fa fa-twitter" />
                        <a href="#" className="fa fa-linkedin" />
                        <a href="#" className="fa fa-instagram" />
                    </div>
                </div>
            </div>
            <div className="fixed-footer">
                @ 2023 SKILLIFY, INC
            </div>
        </div>
    )
}

export default Index