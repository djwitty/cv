import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          
            {/*
            <Cell col={4}>
              <img
                src="https://web-dev-studio.com/ava.jpg"
                alt="avatar"
                className="avatar-img"
              />
            </Cell>
            */}
            <Cell col={12}>
              <p>&nbsp;</p>
              <div className="">
                <h1><span style={{color: 'black'}}>Mikhail</span> <span style={{color: 'white'}}>Povstenko</span></h1>
                <h2 style={{color: 'white'}}>Project Manager | <span style={{color: 'black'}}>Web-developer</span></h2>
                <h3 style={{color: 'white'}}><span style={{color: 'black'}}>Most proud of:</span> project analysis, team management, staff motivating</h3>
                <h3 style={{color: 'white'}}>What I love: <span style={{color: 'black'}}>traveling, languages, self-developemt, quizzes</span></h3>
                <h4 style={{color: 'white'}}><span style={{color: 'black'}}>Modern freak:</span> no tattoos, no piercing, no drugs…</h4>
                <h5 style={{color: 'white'}}>Slogan: <span style={{color: 'black'}}>more than enough is too much</span></h5>
              </div>
            </Cell>
          <Cell col={12}>
            <div className="banner-text" style={{padding: '1em'}}>
              <h3 style={{align: 'center', color: 'orange', margin: '0'}}>Hard Skills</h3>
              <p style={{margin: '0'}}>
                <b style={{color: 'purple'}}>PM:</b> Agile(SCRUM/Kanban), Waterfall, Jira/Confluence/Trello<br/>
                <b style={{color: 'purple'}}>Web-Dev:</b> HTML/CSS/JS, Gulp/Webpack, SASS/Stylus/Pug, Git <br/>
                <b style={{color: 'purple'}}>Expertise:</b> PHP/MySQL, DevOps processes, Linux user, RnD, MVP<br/>
                <b style={{color: 'purple'}}>CMS:</b> WordPress, OpenCart, Drupal, Magento, Joomla, Typo3, ModX
              </p>
              <h3 style={{align: 'center', color: 'orange', margin: '0'}}>Soft Skills</h3>
              <p><span style={{color: 'red'}}>Competent</span>, <span style={{color: 'orange', backgroundColor: 'white'}}>Driven</span>, <span style={{color: 'yellow'}}>Businesslike</span>, <span style={{color: 'green', backgroundColor: 'white'}}>Communicative</span>, <span style={{color: 'blue'}}>Reliable</span>, <span style={{color: 'indigo', backgroundColor: 'white'}}>Insightful</span>, <span style={{color: 'violet'}}>Cooperative</span></p>
              <hr style={{padding: '1em'}}/>
              <div className="social-links">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/witty87/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/parovozik_is_train/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
                {/* Github */}
                <a href="https://github.com/djwitty" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/* BitBucket */}
                <a href="https://bitbucket.org/mikhail_pov/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-bitbucket-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;