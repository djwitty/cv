import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://web-dev-studio.com/ava.jpg"
              alt="avatar"
              className="avatar-img"
              />
              <h1>Project Manager | Web-developer</h1>
            <div className="banner-text">
              <h2 style={{align: 'center', color: 'white', margin: '0'}}>Hard Skills</h2>
              <p style={{margin: '0'}}>
                <b>PM: </b>Agile(SCRUM/Kanban), Waterfall, Jira/Confluence/Trello
              </p>
              <p>
                <b>Web-Dev: </b>HTML/CSS/JS | Gulp/Webpack/Bootstrap/Git | Linux user&nbsp;&nbsp;&nbsp;&nbsp;<b>CMS: </b>WP/OC/Magento etc.
              </p>
              <hr/>
              <h2 style={{align: 'center', color: 'white', margin: '0'}}>Soft Skills</h2>
              <p>Time management | Responsibility | Team leadership | Customer Support | Communicative | Reliable</p>
              <div className="social-links">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/witty87/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Github */}
                <a href="https://github.com/djwitty" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
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