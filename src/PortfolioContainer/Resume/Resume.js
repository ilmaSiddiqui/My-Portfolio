import React from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/Animations';
import Animations from '../../utilities/Animations';
import { useState, useEffect } from 'react';
import './Resume.css';
// import index from 'react-typical';

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  // let fadeInScreenHandler = (screen) => {
  //   if (screen.fadeInScreen !== props.id)
  //     return;
  //   Animations.animations.fadeInScreen(props.id);
  // }
  //  const fadeInSubscription =
  //   ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className='resume-heading'>
        <div className='resume-main-heading'>
          <div className='heading-bullet'>
            <span>{props.heading ? props.heading : ''}</span>
            {props.fromDate && props.toDate ? (
              <div className='heading-date'>
                {props.fromDate + "_" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className='resume-sub-heading'>
            <span>{props.subHeading ? props.subHeading : ''}</span>
          </div>
          <div className='resume-heading-description'>
            <span>{props.description ? props.description : ''}</span>
          </div>
        </div>
      </div>
    );
  }

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interest", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavsScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "React Native", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 0 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Mondo Db", ratingPercentage: 0 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "july 2022", toDate: "Aug 2022" },
      description: "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap"
    },
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "july 2022", toDate: "Aug.2022" },
      description: "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap"
    },
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "july 2022", toDate: "Aug.2022" },
      description: "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React js, Bootstrap, Rxjs and NodeJS."
    },
  ];

  const resumeDetails = [
    <div className='resume-screen-container' key="education">
      <ResumeHeading
        heading={"Bansal College Of Enginerring, Mandideep"}
        subHeading={"BACHELOR OF COMPUTER SCIENCE ENGINERRING"}
        fromDate={"2020"}
        toDate={"2024"}
      />
      <ResumeHeading
        heading={"Hire Secondary School"}
        subHeading={"Govt.Girls.Hir.Sec.School, Goharganj"}
        fromDate={"2019"}
        toDate={"2020"}
      />
      <ResumeHeading
        heading={"High School"}
        subHeading={"Govt.Girls.Hir.Sec.School, Goharganj"}
        fromDate={"2018"}
        toDate={"2019"}
      />
    </div>,
    <div className='resume-screen-container' key="word-experience">
      <ResumeHeading
        heading={"White dairy"}
        subHeading={"FULL STACK DEVELOPER INTERN"}
        fromDate={"2022"}
        toDate={"present"}
      />
      <div className='experience-description'>
        <span className='resume-description-text'>
          Currently working as MERN stack web and mobile developer
        </span>
      </div>
      <div className='experience-description'>
        <span className='resume-description-text'>
          - Developed an ecommerce website for client with the dashboard for managing the products, managing reviews, users, payment etc. .
        </span>
        <br />
        <span className='resume-description-text'>
          - Integrated the web app with backend services to create new user onboarding application with dynamic form content.
        </span>
        <br />
        <span className='resume-description-text'>
          - I stretch my mental capacity to develope UI as per the given designs.
        </span>
      </div>,
      <div className='resume-screen-container programming-skills-container'
        key="programming-skills"
      >
        {programmingSkillsDetails.map((skill, index) => (
          <div className='skill-parent' key={index}>
            <div className='heading-bullet'></div>
            <span>{skill.skill}</span>
            <div className='skill-percentage'>
              <div style={{ width: skill.ratingPercentage + "%" }}
                className='active-percentage'>

              </div>
            </div>
          </div>
        ))}
      </div>,
      <div className='resume-screen-container' key={"projects"}>
        {/* {projectsDetails.map((projectDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectsDetails.title}
            subHeading={projectsDetails.subHeading}
            description={projectsDetails.description}
            fromDate={projectsDetails.duration.fromDate}
            toDate={projectsDetails.duration.toDate}
          />
        ))} */}
      </div>,
      <div className='resume-screen-container' key={"intrests"}>
        <ResumeHeading
          heading='Traveling'
          description='Traveling is one of the best ways to learn more about yourself. Every day traveling brings a new set of issues and opportunities. The way you handle those also gives you insight into who you are. You will come home knowing yourself better, and with a fresh perspective on what you want out of life.'
        />
        <ResumeHeading
          heading='Drawing'
          description='It helps me learn about myself. It helps me feel more happy and confident,and It keeps me honest with myself.'
        />
        <ResumeHeading
          heading='Learning'
          description='Learning is “a process that leads to change, which occurs as a result of experience and increases the potential for improved performance. '
        />
      </div>
    </div>
  ]

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)"}
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
        key={index}
      >
        <img className='bullet-logo'
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="oops ,,, no internet connection"
        />
      </div>
    ))
  }

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className='resume-details-carousal'
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className='resume-container screen-container' id={props.id || ""}>
      <div className='resume-content'>
        <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'} />
        <div className='resume-card'>
          <div className='resume-bullets'>
            <div className='bullet-container'>
              <div className='bullet-icons'></div>
              <div className='bullets'>{getBullets()}</div>
            </div>
          </div>
          <div className='resume-bullet-details'>{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  )
}
