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
          {/* Projects */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'white', height: '350px', background: 'url(https://i.postimg.cc/mZnq1VWr/ladda-ned.png) center / cover'}} ></CardTitle>
            <CardText>
            Quire is an easy to use lightweight notekeeping app.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Try it</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
        </div>

      )
    } 
  }

  render() {
    return(
      <div>
        

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
