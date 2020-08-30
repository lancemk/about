import React, { Component } from 'react'
import { Card , Paper, List } from '@material-ui/core'
import ImageAvatar from './ImageAvatar'
import './main.css'

export default class Home extends Component {
  render() {
    return (
      <>
      <div className="container" >

        <div className="left-space">
          Empty
        </div>

        <div className="left">
          <Card style={{padding: "1.0em"}}> 
          <h2> Lance B.C. Mok </h2> <img style={{width: '2em', height: '2em'}} src="/image/lance.png" />
          <h2> Lance B.C. Mok </h2> <ImageAvatar />
          <div >
            <h4 style={{fontWeight: "700"}}> Tools of Experience </h4>
            <List style={{paddingTop: "0.2em", fontWeight: "600", fontSize: "12px"}}> JS Web apps, OpenGL, WebGL Fullstack Experience development </List>       
            <List style={{paddingTop: "0.2em", fontWeight: "600", fontSize: "12px"}}> TS npm package dev, extended package, reconciler dev </List>
            <List style={{paddingTop: "0.2em", fontWeight: "600", fontSize: "12px"}}> Electronics sensor design </List>
            <List style={{paddingTop: "0.2em", fontWeight: "600", fontSize: "12px"}}> Robotics sensor API stacks developement: ROS framework, C++ API </List>
            
            <h4 style={{fontWeight: "700", padding: "0em"}  }> Education </h4>
            <Paper variant="outlined" style={{background: "#a3a3a3", padding: "0.5em", paddingTop: "0em"}}>
              <List style={{padding: "0em", fontWeight: "600", fontSize: "12px"}}> 
                <h5> BEng. of (Hon) Mech - NTU Singapore  </h5>
                
                </List>       
              <List style={{padding: "0em", fontWeight: "600", fontSize: "12px"}}> 
                <h5> Diploma in Mech.Eng - Singapore Polytechnic </h5>
                
                </List>
            </Paper>
          </div>
          </Card>
        </div>

        <div className="center">
       
          <Paper style={{maxHeight: '550px', width: '500px'}}>
            <List style={{maxHeight: '100%'}}>
            
            <Paper variant="outlined"  style={{background: "#a3a3a3", padding: "1.5em"}}>
            <h3 style={{fontWeight: "800"}}> Portfolio </h3>
              <List style={{paddingTop: "0.2em", fontWeight: "600", fontSize: "12px"}}> 
                <List> Robotics Path Planner </List>
                <Card variant="outlined" square style={{height: '10em', width: '10em', display: 'inline-block'}} > three </Card>
                <Card variant="outlined" square style={{height: '10em', width: '10em', display: 'inline-block'}} > babylon </Card>
              </List>
            </Paper>
            
            <Paper variant="outlined"  style={{background: "#a3a3a3", padding: "1.5em"}}>
            <h3 style={{fontWeight: "800"}}> Portfolio </h3>
              <List style={{paddingTop: "0.2em", fontWeight: "600", fontSize: "12px"}}> 
                <List> Robotics Path Planner </List>
                <Card variant="outlined" square style={{height: '10em', width: '10em', display: 'inline-block'}} > three </Card>
                <Card variant="outlined" square style={{height: '10em', width: '10em', display: 'inline-block'}} > babylon </Card>
              </List>
            </Paper>
            
            <Paper variant="outlined"  style={{background: "#a3a3a3", padding: "1.5em"}}>
            <h3 style={{fontWeight: "800"}}> Portfolio </h3>
              <List style={{paddingTop: "0.2em", fontWeight: "600", fontSize: "12px"}}> 
                <List> Robotics Path Planner </List>
                <Card variant="outlined" square style={{height: '10em', width: '10em', display: 'inline-block'}} > three </Card>
                <Card variant="outlined" square style={{height: '10em', width: '10em', display: 'inline-block'}} > babylon </Card>
              </List>
            </Paper>
            
            <Paper variant="outlined"  style={{background: "#a3a3a3", padding: "1.5em"}}>
            <h3 style={{fontWeight: "800"}}> Portfolio </h3>
              <List style={{paddingTop: "0.2em", fontWeight: "600", fontSize: "12px"}}> 
                <List> Robotics Path Planner </List>
                <Card variant="outlined" square style={{height: '10em', width: '10em', display: 'inline-block'}} > three </Card>
                <Card variant="outlined" square style={{height: '10em', width: '10em', display: 'inline-block'}} > babylon </Card>
              </List>
            </Paper>
            
            </List> 
          </Paper>

        </div>

        <div className="right">
          <h4 style={{fontWeight: "700"}}> Tools of Experience </h4>
          <List style={{paddingTop: "0.2em", fontWeight: "600", fontSize: "12px"}}> JS Web apps, OpenGL, WebGL Fullstack Experience development </List>       
          <List style={{paddingTop: "0.2em", fontWeight: "600", fontSize: "12px"}}> TS npm package dev, extended package, reconciler dev </List>
          <List style={{paddingTop: "0.2em", fontWeight: "600", fontSize: "12px"}}> Electronics sensor design </List>
          <List style={{paddingTop: "0.2em", fontWeight: "600", fontSize: "12px"}}> Robotics sensor API stacks developement: ROS framework, C++ API </List>
          
          <h4 style={{fontWeight: "700", padding: "0em"}  }> Education </h4>
          <Paper variant="outlined" style={{background: "#a3a3a3", padding: "0.5em", paddingTop: "0em"}}>
            <List style={{padding: "0em", fontWeight: "600", fontSize: "12px"}}> 
              <h5> BEng. of (Hon) Mech - NTU Singapore  </h5>
              
              </List>       
            <List style={{padding: "0em", fontWeight: "600", fontSize: "12px"}}> 
              <h5> Diploma in Mech.Eng - Singapore Polytechnic </h5>
              
              </List>
          </Paper>
        </div>

        <div className="right-space">
          Empty
        </div>

      </div>
      </>
    )
  }
}
