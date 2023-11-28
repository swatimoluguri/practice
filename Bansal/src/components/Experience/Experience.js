import React from 'react';
import './Experience.css';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';


function Experience() {
    return (
        <div className="Experience">
            <h1 className="header">
                <center>
                    <p className="text-box">
                        <b>EXPERIENCE</b>
                    </p>
                </center>
            </h1>
            <br />
            <Timeline lineColor={'#f37735'}>
            <TimelineItem key="001" dateText="Mar, 2020 - Till Now" dateInnerStyle={{ background: '#d11141' }} style={{ color: '#d11141' }}
                bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                }} >
                    <h3>J. P. Morgan Chase & Co.</h3>
                    <h4>Software Engineer</h4>
                    <p>
                        <ul>
                            <li>Developing and maintaining the settlement application as per the requrements.</li>
                            <li>Providing production support and enhancing the application to accommodate the new requirements and changes.</li>
                        </ul>
                    </p>
                </TimelineItem>
                <TimelineItem key="001" dateText="Mar, 2020 - June, 2021" dateInnerStyle={{ background: '#00b159' }} style={{ color: '#00b159' }}
                bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                }} >
                    <h3>Wissen Technology</h3>
                    <h4>Software Engineer</h4>
                    <p>
                        Handling the clients and helping in understanding the requirements for the software,
                        developing the solutions to cater the requirements, help the clients to move to the latest 
                        technology applicable for them, and developing the products for internal and external usage.
                        <br />
                        <i>Worked as a Consultant with Morgan Stanley</i>
                    </p>
                </TimelineItem>
                <TimelineItem key="002" dateText="Nov, 2019 - Mar, 2020" dateInnerStyle={{ background: '#00aedb', color: '#000' }}
                    bodyContainerStyle={{
                        background: '#ddd',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }} style={{ color: '#00aedb' }}>
                    <h3>Shop101.com</h3>
                    <h4>Software Developement Engineer</h4>
                    <p>
                        Developed new features in the application and fixed the bugs based on the requirements.
                    </p>
                </TimelineItem>
                <TimelineItem key="003" dateText="Jul, 2016 - Nov, 2019" dateInnerStyle={{ background: '#ffc425' }}
                bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                }} style={{ color:'#ffc425' }}>
                    <h3>Oracle Financial Services Software</h3>
                    <h4>Senior Consultant</h4>
                    <p>
                        Helping the Functional team to gather the requirements through POC's,
                        Developing the required functionalities as stated by the customer and implementing them onsite,
                        and training the new joiners for the team.
                    </p>
                    <p>
                        <b>Honors and Achievements</b>
                        <ul>
                            <li>
                                <u><i>Star Performer:</i></u> <br />
                                Awarded Best Performer for leading the development and implementation efforts from the front at one of the most demanding clients (Lakshmi Vilas Bank Now, merged into DBS).
                            </li>
                            <li><u><i>Client Recognition:</i></u> <br />
                                Awarded by client (Lakshmi Vilas Bank Now, merged into DBS) for successful and smooth implementation of 
                                one of their biggest Digital Banking upgrades.
                            </li>
                        </ul>
                    </p>
                </TimelineItem>
            </Timeline>
        </div>
    );
}

export default Experience;