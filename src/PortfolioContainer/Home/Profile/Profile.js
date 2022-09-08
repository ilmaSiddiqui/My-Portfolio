import React from 'react'
import Typical from "react-typical"
import './Profile.css';
import ScrollService from '../../../utilities/ScrollService';



export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href="https://www.facebook.com/ilma.siddiqui.3910">
                                <i className='fa fa-facebook-square'></i>
                            </a>

                            <a href="https://www.instagram.com/ilmasiddiqui022/">
                                <i className='fa fa-instagram'></i>
                            </a>

                            <a href="https://twitter.com/ilmasid53052881">
                                <i className='fa fa-twitter'></i>
                            </a>

                            <a href="https://github.com/Missilma">
                                <i className='fa fa-github'></i>
                            </a>

                            <a href="https://www.linkedin.com/in/ilma-s-0790a322b/">
                                <i className='fa fa-linkedin'></i>
                            </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className='primary-text'>
                            {" "}
                            Hello, I'M <span className="highlighted-text">Ilma siddiqui</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {""}
                            <h1>
                                {""}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Enthusiastic Dev 😎",
                                        1000,
                                        "Full Stack Devloper 💻",
                                        1000,
                                        "MERN Stack Devloper 📱",
                                        1000,
                                        "Cross Plateform Dev 🔴",
                                        1000,
                                        "React/React Native Dev 🌐",
                                        1000,

                                    ]}

                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                <b>I am undergraduate CSE Student .</b><br /> Looking for an opportunity where I enhance my skills<br/> and learn new things and make more contribution to organization.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'
                        onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                        > Hire Me </button>
                        <a href='Ilma Siddiqui.pdf' download={'Ilma Siddiqui.pdf'}>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    )
}
