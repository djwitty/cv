import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={12}>
            <h3>Key points before interviewing me:</h3>
          </Cell>
          <Cell col={12}>
            <ul>
              <li>As Developer - I definetely DON'T like support code. I like to create socially useful projects.</li>
              <li>I appreciate my time, however it will be pleasure for me to speak with you for various themes. I prefer meet in real than waste time with small talks in Skype.</li>
              <li>I can pass the technical interview, but won't waste time for test tasks</li>
            </ul>
          </Cell>
          <Cell col={12}>
            <h3>Curriculum vitae:</h3>
          </Cell>
          <Cell col={1}><h5 style={{margin: '0'}}>2006</h5></Cell>
          <Cell col={11}>I graduated with honors from "Mykolaiv Professional Engineering Lyceum" and got qualifications "Computer Typing Operator".</Cell>
          <Cell col={1}><h5 style={{margin: '0'}}>2006</h5></Cell>
          <Cell col={11}>I have worked in American web-dev company as HTML/CSS developer and obtained my first experience in Web-development sphere.</Cell>
          <Cell col={1}><h5 style={{margin: '0'}}>2006</h5></Cell>
          <Cell col={11}>I started education at "Mykolaiv Politechnical Institute" and got my first serious job at huge North American IT-company as HTML/CSS Developer and also I Did additional coding-tasks for another companies.</Cell>
          <Cell col={1}><h5 style={{margin: '0'}}>2008</h5></Cell>
          <Cell col={11}>I have worked as a DJ and took extended study leave from my Univecity. I have been making my money as System Administrator for home users.</Cell>
          <Cell col={1}><h5 style={{margin: '0'}}>2010</h5></Cell>
          <Cell col={11}>Registered in famous freelancers' web-site and still succesfully get tasks and even partners. <a target="_blank" href="https://www.weblancer.net/users/wdsiu/">Link</a>.</Cell>
          <Cell col={1}><h5 style={{margin: '0'}}>2013</h5></Cell>
          <Cell col={11}>I founded my own outsorce web-studio with couple persons and we succesfully worked until June 2016.</Cell>
          <Cell col={1}><h5 style={{margin: '0'}}>2016</h5></Cell>
          <Cell col={11}>Worked as director in IT-company "Application Cloud" as director until February 2019.</Cell>
          <Cell col={1}><h5 style={{margin: '0'}}>2018</h5></Cell>
          <Cell col={11}>From November 2018 to March 2019, I used to live in EU. I stayed in Germany, Slovakia, Malta and even Italy (a bit).</Cell>
          <Cell col={1}><h5 style={{margin: '0'}}>2019</h5></Cell>
          <Cell col={11}>From start of January to end of February, I used to live and study English at <a target="_blank" href="https://ese-edu.com">ESE</a> in Saint's Julian, Malta. I have got <a target="_blank" href="https://prnt.sc/phuwoy">B2 certificate</a>.</Cell>
          <Cell col={1}><h5 style={{margin: '0'}}>2019</h5></Cell>
          <Cell col={11}>Moved to Odessa, because my father was born here and lived almost whole the life. I love Odessa city.</Cell>
          <Cell col={1}><h5 style={{margin: '0'}}>2019</h5></Cell>
          <Cell col={11}>I graduated with honors from "Mykolaiv Professional Engineering Lyceum" and got qualification <a rel="noopener" target="_blank" href="http://web-dev-studio.com/diplom_eng.jpg">"Bechelor in Computer Engeneering (IT-Specialist)"</a>.</Cell>
          <Cell col={1}><h5 style={{margin: '0'}}>2019</h5></Cell>
          <Cell col={11}>For 9 Weeks, I userd to work on position Project Manager in "482 Solutions" Company, where I succesfully managed to several RnD projects, In-House and IoT project. <a target="_blank" href="https://prnt.sc/phtmiy">Recomendation</a>.</Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
