import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
            <Cell col={12}>
              <p>&nbsp;</p>
            </Cell>
            <Cell col={12}>
              <div className="banner-text" style={{padding: '1em'}}>
                <div className="" style={{color: 'white'}}>
                  <h1 style={{color: 'red'}}>Mikhail</h1>
                  <h2 style={{color: 'orange'}}>Front-End Developer</h2>
                  <p style={{margin: '0'}}>
                    <span style={{color: 'yellow'}}>What I love:</span> traveling, languages, self-developemt, quizzes<br/>
                    <span style={{color: 'yellow'}}>Modern freak:</span> no tattoos, no piercing, no drugs…<br/>
                    <span style={{color: 'yellow'}}>Slogan:</span> more than enough is too much
                  </p>
                </div>
                <h3 style={{color: 'blue', margin: '0'}}>Hard Skills</h3>
                <p style={{margin: '0'}}>
                  <b style={{color: 'indigo'}}>PM:</b> Agile(SCRUM/Kanban), Waterfall, Jira/Confluence/Trello<br/>
                  <b style={{color: 'indigo'}}>CMS:</b> WordPress, OpenCart, Drupal, Magento, Joomla, DLE, Typo3, ModX<br/>
                  <b style={{color: 'indigo'}}>Web-Dev:</b> HTML/CSS/JS, Gulp/Webpack, SASS/Stylus/Pug, Bootstrap/Foundation, Git <br/>
                  <b style={{color: 'indigo'}}>Expertise:</b> Tech searching/interviews, PHP/MySQL, DevOps processes, Linux user, RnD, MVP
                </p>
                <h3 style={{align: 'center', color: 'orange', margin: '0'}}>Soft Skills</h3>
                <p style={{}}>
                  <span style={{color: 'red'}}>Competent</span>, <span style={{color: 'orange', backgroundColor: 'white'}}>Driven</span>,&nbsp;
                  <span style={{color: 'yellow'}}>Businesslike</span>,&nbsp;
                  <span style={{color: 'green', backgroundColor: 'white'}}>Communicative</span>,&nbsp;
                  <span style={{color: 'blue'}}>Reliable</span>,&nbsp;
                  <span style={{color: 'indigo', backgroundColor: 'white'}}>Insightful</span>,&nbsp;
                  <span style={{color: 'violet'}}>Cooperative</span>
                </p>
                <hr style={{padding: '1em'}}/>
                <div className="social-links">
                  {/* Instagram */}
                  <a href="https://www.instagram.com/parovozik_is_train/" rel="noopener noreferrer">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                  {/* Github */}
                  <a href="https://github.com/djwitty" rel="noopener noreferrer">
                    <i className="fa fa-github-square" aria-hidden="true" />
                  </a>
                  {/* BitBucket */}
                  <a href="https://bitbucket.org/mikhail_pov/" rel="noopener noreferrer">
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