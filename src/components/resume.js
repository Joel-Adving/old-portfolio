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
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              {/* <img
                src="https://scontent-arn2-1.xx.fbcdn.net/v/t31.0-8/p960x960/12466380_140571439648887_1358403959891043065_o.jpg?_nc_cat=104&_nc_ohc=N7GiyPg7GqwAX9u6BKC&_nc_ht=scontent-arn2-1.xx&_nc_tp=6&oh=80121f95dd6ec7e6c10d77a31427bf22&oe=5E8FD523"
                alt="avatar"
                style={{height: '200px'}}
                 /> */}
            </div>

            <h2 style={{color: 'white', paddingTop: '2em'}}>Joel Adving</h2>
            <h4 style={{color: 'grey'}}>Front End Developer</h4>
            <hr style={{borderTop: '3px solid #fff', width: '50%'}}/>
            <h5 style={{color: 'white'}}>Address</h5>
            <p style={{color: 'white'}}>Brunbärsvägen 8</p>
            <h5 style={{color: 'white'}}>Phone</h5>
            <p style={{color: 'white'}}>+46 70-208-26-95</p>
            <h5 style={{color: 'white'}}>Email</h5>
            <p style={{color: 'white'}}> joel.adving@gmail.com</p>
            <hr style={{borderTop: '3px solid #fff', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2015}
              endYear={2018}
              schoolName="Odengymnasiet"
              schoolDescription="Odenplan – Technology Program, Information And Communication"
               />

               <Education
                 startYear={2019}
                 endYear={2021}
                 schoolName="KYH"
                 schoolDescription="Higher Vocational Education, Front End Development"
                  />
                <hr style={{borderTop: '3px solid #fff'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2018}
              jobName="Mailman"
              jobDescription="I worked as a mailman for Postnord in stockholm city."
              />

              <Experience
                startYear={2019}
                endYear={2019}
                jobName="Driver"
                jobDescription="As a driver I worked for Marathongruppen and Mathem. I mostly drove light trucks and delivered goods"
                />
              <hr style={{borderTop: '3px solid #fff'}} />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
