import React from 'react';
import './Projects.css';
import { Accordion, Card } from 'react-bootstrap';

function Projects(){
    return (
        <div className="Projects">
            <h1 className="header">
                <center>
                    <p className="text">
                        PROJECTS
                    </p>
                </center>
            </h1>
            <div className="w-responsive text-left w-70  p-3 mt-2">
            {/* <div className="w-auto text-left w-70 mx-auto p-3 mt-2"> */}
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                        Financial Limits Module
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                                <b>Details:</b>
                                <li>Enabling the user to set the limits for the various financial transactions.</li>
                                <li>Validating any and every transaction against the limits set either by the Internet Banking User or Bank Admin</li>
                                <li>Enabled the bank to immedeately stop any consumer from doing transactions without raising any flag in the Core Banking System</li>
                                <br />
                                <b>Technologies Used:</b> 
                                <li>Java, XML, XSL, Javascript, HTML, Oracle sql</li>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                        Changes in post-authorization flows
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>
                                <b>Details:</b>
                                <li>Enabling the corporate Internet Banking users to get redirected to any of the third party system being used by them.</li>
                                <li>This can be enabled/disabled by the Bank on the request from the corporate users.</li>
                                <li>Unified the login flow for the bank tellers for RTGS system with the existing Core-Banking System.</li>
                                <br />
                                <b>Technologies Used:</b> 
                                <li>Java, XML, XSL, Javascript, HTML, Oracle sql</li>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                        Product Developement and Integration
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                    <Card.Body>
                            <b>Details:</b>
                            <li>Updated the Term Deposit Module in the Internet Banking to work with one of the Core Banking Solution</li>
                            <br />
                            <b>Technologies Used:</b> 
                            <li>Java, Eclipselink, Oracle sql, REST</li>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                    Second Factor Authentication
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>
                            <b>Details:</b>
                            <li>Provided the facility for the user to choose the type of 2FA best suited to him/her</li>
                            <li>Provided the user a choice to get the OTP SMS by E-Mail or SMS</li>
                            <li>Integrated the 2FA System with an external Fraud Risk Management System</li>
                            <li>Developed an internal alternate flow based on multiple variables, in case the external system is taking too long</li>
                            <br />
                            <b>Technologies Used:</b> 
                            <li>Java, Eclipselink, Javascript, Oracle Jet, HTML, Oracle sql, REST</li>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                    Mobility Interface
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                    <Card.Body>
                            <b>Details:</b>
                            <li>Developed a single point for the authentication of the users</li>
                            <li>Developed various APIS for transactions like Beneficiary Management, secon factor authentication and limits maintenance.</li>
                            <br />
                            <b>Technologies Used:</b> 
                            <li>Java, Eclipselink, Javascript, Oracle sql, REST, servlets, weblogic</li>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="5">
                    Auto-onboard of internet banking users
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                    <Card.Body>
                            <b>Details:</b>
                            <li>The user need to register with the bank for internet banking onboarding</li>
                            <li>The user is then validated if he is authorized for auto-nboard through a series of checks like availability of Debit card, Account Opening Date etc.</li>
                            <li>Based on the criteria set, the user will be onbaorded to the internet banking and the username and password will be sent to the user.</li>
                            <br />
                            <b>Technologies Used:</b> 
                            <li>Java, Eclipselink, Javascript, Oracle Jet, HTML, Oracle sql, REST</li>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="6">
                    Referral Leaderboard
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6">
                    <Card.Body>
                            <b>Details:</b>
                            <li>Displays the list of the users with most number of referrals.</li>
                            <li>An API was exposed tp sent ut the data whenever requested.</li>
                            <li>Used the redis as cache for storing the details to reduce the load on the database</li>
                            <br />
                            <b>Technologies Used:</b> 
                            <li>Java, Postgres, REST</li>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="7">
                    Streamlining of the SMS delivery System
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="7">
                    <Card.Body>
                            <b>Details:</b>
                            <li>Reduced the size f the SMS</li>
                            <li>Identified the SMS which are not being sent and removed them</li>
                            <li>Changes lead to the reduced SMS costs.</li>
                            <br />
                            <b>Technologies Used:</b> 
                            <li>Java, REST, Spring</li>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="8">
                    Automation of genrating the files in multiple languages from the recieved translation file
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="8">
                    <Card.Body>
                            <b>Details:</b>
                            <li>Generated the file for the list of words to be translated from a given folder</li>
                            <li>Generated the new file with translated words in the given folder with the given translation under correct language code folder.</li>
                            <li>Lead to reduced number of people required to allow the multi-lingual support in UI.</li>
                            <br />
                            <b>Technologies Used:</b> 
                            <li>Java, Swing</li>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="9">
                    Automating the development process
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="9">
                    <Card.Body>
                            <b>Details:</b>
                            <li>Developed the utlity to reduce the developement time, by providing the code gfeneration facility</li>
                            <li>Generated the new files based on the JSON provided with the static code and the additional code that is required.</li>
                            <li>Genrated the SQL scripts to be inserted for the system to identify and authenticate the access to the new transaction.</li>
                            <li>Reduced the develpment time of basic CRUD by half</li>
                            <br />
                            <b>Technologies Used:</b> 
                            <li>Python, Jinja</li>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="10">
                    System Events Management System
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="10">
                    <Card.Body>
                            <b>Details:</b>
                            <li>Dual mode Queue based system to handle the EOD and other events</li>
                            <li>Handling fixed and daily generated events</li>
                            <li>Synchronizes the events from the upstream systems for the downstream systems.</li>
                            <li>Reduces the overhead of both the downstream and upstream systems of sending the event to the multiple systems</li>
                            <li>Genrates the final event for the downstream systems based on the triggers received from the upstream systems.</li>
                            <br />
                            <b>Technologies Used:</b> 
                            <li>Java, DB2, Python, Spring boot, Gradle</li>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="11">
                    Build Time Improvement
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="11">
                    <Card.Body>
                            <b>Details:</b>
                            <li>Reduced teh build time by 30 mins (reduced from 50 mins to 20 mins)</li>
                            <li>Improved the build time by using maven surefire plugin.</li>
                            <li>Optmized the performance by running the test cases over 4 JVMs in class based parallel configuration.</li>
                            <li>Reduced teh time taken by developers to build, deploy and test the application.</li>
                            <br />
                            <b>Technologies Used:</b> 
                            <li>Java, Oracle SQL, Maven, Junit</li>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="12">
                    Improved the performance of the Funds Transfer Preparation
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="12">
                    <Card.Body>
                            <b>Details:</b>
                            <li>Asynchronous Process to gathher all the Financial Events and build the Funds Transfer.</li>
                            <li>The main process waits for 5 mins and checks if all the Funds Transfer hass been completed.</li>
                            <li>Optmized the performance by checking and gathering the data over a period of 2 months.</li>
                            <li>Updated the logic based on various thresholds and max attempts to derive the sleep interval dynamically.</li>
                            <li>Reduced the time to prepare funds transfer by ~20%.</li>
                            <br />
                            <b>Technologies Used:</b> 
                            <li>Java, Oracle SQL, Maven ,Junit</li>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="13">
                    Critical Changes related to the Brexit
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="13">
                    <Card.Body>
                            <b>Details:</b>
                            <li>Due to Brexit, there were many merchants who will have to be funded from 2 entities.</li>
                            <li>Updated the certain parts of the application to handle the multi-entity upgrades.</li>
                            <br />
                            <b>Technologies Used:</b> 
                            <li>Java, Oracle SQL, Maven ,Junit</li>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </div>
        </div>
    );
}

export default Projects;