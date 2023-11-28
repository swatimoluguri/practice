import React from 'react';
import drivenImage from '../../images/icons/driven.png';
import reliableImage from '../../images/icons/reliable.png';
import persistentImage from '../../images/icons/persistent.png';
import flexibleImage from '../../images/icons/flexible.png';
import teamPlayerImage from '../../images/icons/team-player.png';
import javaImage from '../../images/icons/java.png';
import pythonImage from '../../images/icons/python.png';
import dbImage from '../../images/icons/database.png';
import apiImage from '../../images/icons/rest-api.png';
import frontEndImage from '../../images/icons/source-code.png';
import myImage from '../../images/me.jpg';
import './Skills.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ReactRoundedImage from "react-rounded-image";

function Skills() {
    return (
        <div className="Skills mouse-icon">
            <h1 className="header">
                <center>
                    <p className="text-box">
                        <b>ABOUT</b>
                    </p>
                </center>
            </h1>
            <br />
            <center>
            <p>
                <span className="my-image-row">
                    <center><ReactRoundedImage image={myImage} roundedSize="5" imageWidth="300" imageHeight="300" /></center>
                    <span className="skill-set">
                            I am a Software Engineer working for J.P. Morgan Chase & Co. in Bangalore.<br />
                            I have {experience()} Years of experience in Software Development and Designing Solutions
                            in Financial and Banking Domain.<br />
                            I have a passion for diving into new technologies and, trying to use them according to the needs.<br />
                    </span>
                </span>
            </p>
            </center>
            <center>
                <h3 className="skill">Skill Set</h3>
                <p>
                <span className="skill">
                        <img src={javaImage} className="lang-icon" alt="" />
                        <center>
                            <ProgressBar className="skill-set">
                                <ProgressBar animated now={70} variant="success" max="100" key={1} />
                                <ProgressBar animated now={30} variant="danger" max="100" key={2} />
                            </ProgressBar>
                        </center>
                    </span>
                    <span className="skill">
                        <img src={pythonImage} className="lang-icon" alt="" />
                        <center>
                            <ProgressBar className="skill-set">
                                <ProgressBar animated now={40} variant="success" max="100" key={1} />
                                <ProgressBar animated now={60} variant="danger" max="100" key={2} />
                            </ProgressBar>
                        </center>
                    </span>
                    <span className="skill">
                        <img src={dbImage} className="lang-icon" alt="" />
                        <center>
                            <ProgressBar className="skill-set">
                                <ProgressBar animated now={60} variant="success" max="100" key={1} />
                                <ProgressBar animated now={40} variant="danger" max="100" key={2} />
                            </ProgressBar>
                        </center>
                    </span>
                    <span className="skill">
                        <img src={apiImage} className="lang-icon" alt="" />
                        <center>
                            <ProgressBar className="skill-set">
                                <ProgressBar animated now={80} variant="success" max="100" key={1} />
                                <ProgressBar animated now={20} variant="danger" max="100" key={2} />
                            </ProgressBar>
                        </center>
                    </span>
                    <span className="skill">
                        <img src={frontEndImage} className="lang-icon" alt="" />
                        <center>
                            <ProgressBar className="skill-set">
                                <ProgressBar animated now={20} variant="success" max="100" key={1} />
                                <ProgressBar animated now={80} variant="danger" max="100" key={2} />
                            </ProgressBar>
                        </center>
                    </span>
                </p>
            </center>
            
            <center>
                <h3 className="skill">Strengths</h3>
                <p>
                    <span className="traits-image-row">
                        <img src={drivenImage} className="icon-logo" alt=""></img>
                        <span className="caption">Driven</span>
                    </span>
                    <span className="traits-image-row">
                        <img src={reliableImage} className="icon-logo" alt=""></img>
                        <span className="caption">Reliable</span>
                    </span>
                    <span className="traits-image-row">
                        <img src={persistentImage} className="icon-logo" alt=""></img>
                        <span className="caption">Persistent</span>
                    </span>
                    <span className="traits-image-row">
                        <img src={flexibleImage} className="icon-logo" alt=""></img>
                        <span className="caption">Flexible</span>
                    </span>
                    <span className="traits-image-row">
                        <img src={teamPlayerImage} className="icon-logo" alt=""></img>
                        <span className="caption">Team Player</span>
                    </span>
                </p>
            </center>
        </div>
    );
}

function experience() {
    let date = new Date().getFullYear();
    return (date - 2016);
}

export default Skills;
