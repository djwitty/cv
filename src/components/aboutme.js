import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={12}>
            <h1>Curriculum vitae</h1>
          </Cell>
          <Cell col={1}><h5 style={{margin: '0'}}>2006</h5></Cell>
          <Cell col={11}>I graduated with honors from "Mykolaiv Professional Engineering Lyceum" and got qualifications "Computer Typing Operator"</Cell>
          <Cell col={1}><h5 style={{margin: '0'}}>2006</h5></Cell>
          <Cell col={11}>I have worked in American web-dev company as HTML/CSS developer and obtained my first experience in Web-development sphere</Cell>
          <Cell col={1}><h5 style={{margin: '0'}}>2006</h5></Cell>
          <Cell col={11}>I started education at "Mykolaiv Politechnical Institute" and got my first serious job at huge North American IT-company as HTML/CSS Developer and also I Did additional coding-tasks for another companies</Cell>
          <Cell col={1}><h5 style={{margin: '0'}}>2008</h5></Cell>
          <Cell col={11}>I have worked as a DJ and took extended study leave from my Univecity. I have been making my money as System Administrator for home users.</Cell>
          <Cell col={1}><h5 style={{margin: '0'}}>2010</h5></Cell>
          <Cell col={11}>Registered in famous freelancers' web-site and still succesfully get tasks and even partners. <a href="https://www.weblancer.net/users/wdsiu/">Link</a></Cell>
          <Cell col={1}><h5 style={{margin: '0'}}>2013</h5></Cell>
          <Cell col={11}>I founded my own outsorce web-studio with couple persons and we succesfully worked until June 2016</Cell>
          <Cell col={1}><h5 style={{margin: '0'}}>2016</h5></Cell>
          <Cell col={11}>Worked as director in IT-company "Application Cloud" as director until February 2019</Cell>
          <Cell col={1}><h5 style={{margin: '0'}}>2019</h5></Cell>
          <Cell col={11}>Moved to Odessa, because my father</Cell>
          <Cell col={1}><h5 style={{margin: '0'}}>2019</h5></Cell>
          <Cell col={11}>9 Weeks worked as Project Manager in "482 Solutions" Company, where I succesfully managed to several RnD and In-House Projects</Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
