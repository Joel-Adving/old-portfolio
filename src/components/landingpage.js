import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="wrapper">
            <img
              src="https://scontent-arn2-1.xx.fbcdn.net/v/t31.0-8/p960x960/12466380_140571439648887_1358403959891043065_o.jpg?_nc_cat=104&_nc_ohc=N7GiyPg7GqwAX9u6BKC&_nc_ht=scontent-arn2-1.xx&_nc_tp=6&oh=80121f95dd6ec7e6c10d77a31427bf22&oe=5E8FD523"
              alt="avatar"
              className="avatar-img"
              />
              </div>

            <div className="banner-text">
              <h1>Front End Developer</h1>

            <hr/>

          <p>HTML/CSS | JavaScript | Bootstrap | React </p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/joel-adving-3385571a0/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/Joel-Adving" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          
          {/* <a href="" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a> */}

  

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
