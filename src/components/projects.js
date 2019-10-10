import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Corsens Medical */}
          <Card shadow={5} style={{minWidth: '300', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '200px', background: 'url(http://corsensmed.com/wp-content/uploads/2016/06/corsens_logo2.png) no-repeat left center'}} >
              Corsens Medical
            </CardTitle>
            <CardText>
              WordPress. Corsens Medical Ltd. company, web-site.
            </CardText>
            <CardActions border>
              <Button colored><a href="http://corsensmed.com/">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Application Cloud */}
          <Card shadow={5} style={{minWidth: '300', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '200px', background: 'url(https://appscloud.io/wp-content/themes/appslanding/images/logo.svg) no-repeat center -20px'}} >
              Application Cloud
            </CardTitle>
            <CardText>
              WordPress. Application Cloud Ltd. company, web-site.
            </CardText>
            <CardActions border>
              <Button colored><a href="http://appscloud.io/">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* Test task 1 */}
          <Card shadow={5} style={{minWidth: '300', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '100px'}} >
              Test task #1
            </CardTitle>
            <CardText>
              Gulp 4. Pug. Stylus. Jquery.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/djwitty/wmru_test">GitHub</a></Button>
              <Button colored><a href="https://form.web-dev-studio.com">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Test task 2 */}
          <Card shadow={5} style={{minWidth: '300', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '100px'}} >
              Test task #2
            </CardTitle>
            <CardText>
              Gulp 4. Pug. Stylus. Jquery.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/djwitty/digis">GitHub</a></Button>
              <Button colored><a href="http://digis.web-dev-studio.com">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Test task 3 */}
          <Card shadow={5} style={{minWidth: '300', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '100px'}} >
              Test task #3
            </CardTitle>
            <CardText>
              Gulp 3. Bootstrap 3. Sass.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/djwitty/provectus_test">GitHub</a></Button>
              <Button colored><a href="https://provectus.web-dev-studio.com">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* My CV */}
          <Card shadow={5} style={{minWidth: '300', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '100px'}} >
              My CV
            </CardTitle>
            <CardText>
              React, React-Router, React-MDL, Production mode
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/djwitty/cv">GitHub</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* KSDB */}
          <Card shadow={5} style={{minWidth: '300', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '100px'}} >
              Kazinaki Shows DataBase
            </CardTitle>
            <CardText>
              API, VueJS, Webpack, Babel, Pug, Sass, Express, Firebase
            </CardText>
            <CardActions border>
              <Button colored><a href="https://bitbucket.org/mikhail_pov/ksdb-dev/src/master/">BitBucket</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Task Manager */}
          <Card shadow={5} style={{minWidth: '300', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '100px'}} >
              Simple Task Manager
            </CardTitle>
            <CardText>
              Pure Java Script, Jquery, Bootstrap 4
            </CardText>
            <CardActions border>
              <Button colored><a href="https://bitbucket.org/mikhail_pov/taskmanjs/src/master/">BitBucket</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Ruhkaranta */}
          <Card shadow={5} style={{minWidth: '300', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '200px'}} >
              Ruhkaranta
            </CardTitle>
            <CardText>
              Wordpress. Booking. Added BNOVO booking system and additional functional.
            </CardText>
            <CardActions border>
              <Button colored><a href="http://ruhkaranta.com/en/">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Corsens Medical */}
          <Card shadow={5} style={{minWidth: '300', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '200px', background: 'url(http://corsensmed.com/wp-content/uploads/2016/06/corsens_logo2.png) no-repeat left center'}} >
              Corsens Medical
            </CardTitle>
            <CardText>
              WordPress. Corsens Medical Ltd. company, web-site.
            </CardText>
            <CardActions border>
              <Button colored><a href="http://corsensmed.com/">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Application Cloud */}
          <Card shadow={5} style={{minWidth: '300', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '200px', background: 'url(https://appscloud.io/wp-content/themes/appslanding/images/logo.svg) no-repeat center -20px'}} >
              Application Cloud
            </CardTitle>
            <CardText>
              WordPress. Application Cloud Ltd. company, web-site.
            </CardText>
            <CardActions border>
              <Button colored><a href="http://appscloud.io/">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Sasta Shop */}
          <Card shadow={5} style={{minWidth: '300', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '200px'}} >
              Sasta Shop
            </CardTitle>
            <CardText>
              OpenCart. Military Wear store.
            </CardText>
            <CardActions border>
              <Button colored><a href="http://sasta-shop.ru">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Technologic Shop 
          <Card shadow={5} style={{minWidth: '300', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '80px'}} >
              Technologic Shop
            </CardTitle>
            <CardText>
              Simpla CMS. Maintenance the web-site.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://www.technologic.com.ua/">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          */}
          {/* Market Line */}
          <Card shadow={5} style={{minWidth: '300', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '200px'}} >
              Market Line
            </CardTitle>
            <CardText>
              Drupal. Market Line Spb store.
            </CardText>
            <CardActions border>
              <Button colored><a href="http://market-line.spb.ru">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    }
  }

  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Management</Tab>
          <Tab>CMS</Tab>
          <Tab>HTML/CSS</Tab>
          <Tab>JS</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects;