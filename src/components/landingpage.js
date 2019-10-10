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
              <h1 style={{color: 'white'}}>Project Manager | Web-developer</h1>
            <div className="banner-text" style={{padding: '1em'}}>
              <h2 style={{align: 'center', color: 'white', margin: '0'}}>Hard Skills</h2>
              <p style={{margin: '0'}}>
                <b>PM: </b>Agile(SCRUM/Kanban), Waterfall, Jira/Confluence/Trello
              </p>
              <p style={{margin: '0', padding: '1em'}}>
                <b>Web-Dev: </b>HTML/CSS/JS | Gulp/Webpack/Bootstrap/Git | Linux user&nbsp;&nbsp;&nbsp;&nbsp;<b>CMS: </b>WP/OC/Magento etc.
              </p>
              <h2 style={{align: 'center', color: 'white', margin: '0'}}>Soft Skills</h2>
              <p>Time management | Risks management | Responsibility | Customer Support | Team leadership | Communicative | Reliable</p>
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
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;