import React, { Component } from 'react'
import { Card , Paper, List } from '@material-ui/core'
import ImageAvatar from './ImageAvatar'
import './main.css'

export default class Home extends Component {
  render() {
    alert("this page is under development")
    return (
      <>
      <div className="container" >
        
        <div className="left-space">
          Empty
        </div>

        <div className="left">
          <Card style={{padding: "1.0em"}}> 
          <h2> Lance B.C. Mok </h2> <ImageAvatar />
          <div >
            <h4 style={{fontWeight: "700"}}> Tools of Experience </h4>
            <List style={{paddingTop: "0.2em", fontWeight: "600", fontSize: "12px"}}> JS Web apps, React, redux, OpenGL, WebGL Fullstack Experience development </List>       
            <List style={{paddingTop: "0.2em", fontWeight: "600", fontSize: "12px"}}> TS npm package dev, extended package, three.js reconciler dev </List>
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
       
          <Paper style={{width: '40em'}}>
            <List style={{maxHeight: '100%'}}>
            
            <Paper variant="outlined"  style={{background: "#a3a3a3", padding: "1.5em"}}>
            <h3 style={{fontWeight: "800"}}> Robotics Path Planner </h3>
              <List style={{paddingTop: "0.2em", fontWeight: "600", fontSize: "12px"}}> 
                <List> Robotics Path Planner </List>
                <Card variant="outlined" square style={{height: '10em', width: '10em', display: 'inline-block'}} > three </Card>
                <Card variant="outlined" square style={{height: '10em', width: '10em', display: 'inline-block'}} > babylon </Card>
              </List>
            </Paper>
            
            <Paper variant="outlined"  style={{background: "#a3a3a3", padding: "1.5em"}}>
            <h3 style={{fontWeight: "800"}}> VIO AR Pose Estimator API </h3>
              <List style={{paddingTop: "0.2em", fontWeight: "600", fontSize: "12px"}}> 
                <List style={{fontWeight: "800", fontSize: "14px"}}> Hardwares and Tools </List>
                  <Card variant="outlined" square style={{height: '10em', width: '10em', display: 'inline-block'}} > Camera and IMU </Card>
                  <Card variant="outlined" square style={{height: '10em', width: '10em', display: 'inline-block'}} > Setup Overview </Card>
                <List style={{fontWeight: "800", fontSize: "14px"}}> Results  </List>
                  <Card variant="outlined" square style={{height: '10em', width: '14em', display: 'inline-block'}} > ORB-SLAM2 </Card>
                  <Card variant="outlined" square style={{height: '10em', width: '14em', display: 'inline-block'}} > using Vins-Mono </Card>
                <List style={{fontWeight: "800", fontSize: "14px"}}> Unity3D Integration  </List>
                  <List style={{height: '10em', width: '45em', display: 'inline-block'}} >
                  Unity3D 2019.f.d12 was used for integration. Pose Estimator API was written in C++ and deployed in 
                  ROS Kinetic running in Ubuntu 16.04 virtual machine, hosted in Windows 10 machine. Unity3D engine
                  was run in the host OS (Windows 10), while deployed with the API, image-stream together with 
                  odometry stream was rendered as canvas texture and attribute for AR Game creation.
                  </List>
              </List>
            </Paper>
            
            <Paper variant="outlined"  style={{background: "#a3a3a3", padding: "1.5em"}}>
            <h3 style={{fontWeight: "800"}}> EEG SSEP Signal on Finger Tactle Response </h3>
              <List style={{paddingTop: "0.2em", fontWeight: "600", fontSize: "12px"}}> 
                <List>  </List>
                <Card variant="outlined" square style={{height: '10em', width: '10em', display: 'inline-block'}} > OpenBCI </Card>
                <Card variant="outlined" square style={{height: '10em', width: '10em', display: 'inline-block'}} > Result </Card>
              </List>
            </Paper>
            
            <Paper variant="outlined"  style={{background: "#a3a3a3", padding: "1.5em"}}>
            <h3 style={{fontWeight: "800"}}> Delivery Drone Lander System </h3>
              <List style={{paddingTop: "0.2em", fontWeight: "600", fontSize: "12px"}}> 
                <List>  </List>
                <Card variant="outlined" square style={{height: '10em', width: '10em', display: 'inline-block'}} > Architecture and Schematic </Card>
                <Card variant="outlined" square style={{height: '10em', width: '10em', display: 'inline-block'}} > Results </Card>
              </List>
            </Paper>
            
            </List> 
          </Paper>

        </div>

        <div className="right">

          <h4 style={{fontWeight: "700", padding: '0.6em'}}> Publication </h4>
          <List style={{padding: "1.2em", fontWeight: "600", fontSize: "12px"}}> 
            JS Web apps, OpenGL, WebGL Fullstack Experience development 
            JS Web apps, OpenGL, WebGL Fullstack Experience development 
            JS Web apps, OpenGL, WebGL Fullstack Experience development 
            </List>       
     
          <h4 style={{fontWeight: "700", padding: "0.6em"}  }> Contact </h4>
          <List style={{padding: "1.2em", fontWeight: "600", fontSize: "12px"}}> 
            JS Web apps, OpenGL, WebGL Fullstack Experience development 
            JS Web apps, OpenGL, WebGL Fullstack Experience development 
            JS Web apps, OpenGL, WebGL Fullstack Experience development 
            </List>       
        </div>

        <div className="right-space">
          Empty
        </div>

      </div>
      </>
    )
  }
}
