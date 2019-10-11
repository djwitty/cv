import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={5}>
            <div style={{textAlign: 'center'}}>
              <img
                src="http://web-dev-studio.com/ava.jpg"
                alt="avatar"
                style={{height: '300px'}}
                 />
            </div>
            <h2 style={{paddingTop: '1em'}}>Mikhail</h2>
            <h4 style={{color: 'grey'}}>Project Manager, SCRUM Master</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
            <p> I am a driven, organised and motivated Project Manager with previous work experience in managing web-projects, dev-teams and business-relationship.
              I have a huge technical background and able to discuss and estimate web-project.
              I take great pride in my work and strive to achieve the best possible results at all times.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
            <div style={{width: '30%', float: 'left'}}>
              <h5>Phone</h5>
              <p><a href="tel: +380996424024">380 (99) 64-24-024</a></p>
            </div>
            <div style={{width: '40%', float: 'left'}}>
              <h5>Email</h5>
              <p><a href="mailto: michael.pov.it@gmail.com">michael.pov.it@gmail.com</a></p>
            </div>
            <div  style={{width: '30%', float: 'right'}}>
              <h5>Address</h5>
              <p>Ukraine, Odessa</p>
            </div>
          </Cell>
          <Cell className="resume-right-col" col={7}>
            <hr style={{borderTop: '3px solid #e22947'}} />
            <h2>Experience</h2>
            <Experience
              startYear={2019}
              endYear={2019}
              jobName="482 Solutions"
              jobDescription="(RnD | IoT | In-House) Projects Manager. Web-projects consultant."
              />
            <Experience
              startYear={2016}
              endYear={2019}
              jobName="Application Cloud"
              jobDescription="Director | Facilities Manager | Recruter/HR"
              />
            <Experience
              startYear={2012}
              endYear={2019}
              jobName="Weblancer.net"
              jobDescription="Full lifecycle PM and Web-developer"
              />
            <Experience
              startYear={2012}
              endYear={2012}
              jobName="Kiberland GameDev Studio"
              jobDescription="HTML, CSS, JS (Knockout.js). Project management (AirFootball)."
              />
            <Experience
              startYear={2011}
              endYear={2012}
              jobName="Tangram UA"
              jobDescription="In-house projects - HTML/CSS/JS. Testing. Basics of PHP/MySQL | JavaScript/JQuery. Unilever.com - Web-site technical support and updating."
              />
            <Experience
              startYear={2006}
              endYear={2007}
              jobName="Geeks For Less"
              jobDescription="HTML/CSS coding"
              />
            <hr style={{borderTop: '3px solid #e22947'}} />
            <h2>Education</h2>
            <Education
              startYear={2006}
              endYear={2009}
              schoolName="International Technological University “Mykolaiv Polytechnics”"
              schoolDescription="Professional qualification: Bachelor in Computer Engineering (IT Specialist)"
            />
            <Education
              startYear={2018}
              endYear={2019}
              schoolName="International Technological University “Mykolaiv Polytechnics”"
              schoolDescription="Professional qualification: Bachelor in Computer Engineering (IT Specialist)"
            />
            <Education
              startYear={2005}
              endYear={2006}
              schoolName="Mykolaiv Professional Engineering Lyceum"
              schoolDescription="Speciality: Computer Typing Operator. Graduated with honors."
            />
            <hr style={{borderTop: '3px solid #e22947'}} />
            <h2>Skills</h2>
            <Skills
              skill="Project Managment"
              progress={99}
            />
            <Skills
              skill="HTML/CSS/JS"
              progress={77}
            />
            <Skills
              skill="Popular CMS"
              progress={80}
            />
            <Skills
              skill="JS Frameworks"
              progress={33}
            />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
