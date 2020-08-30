import React, { Component } from 'react'
import { Card , Paper, List } from '@material-ui/core'
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
          <Card style={{padding: "1.5em"}}> 
          <h2> Lance B.C. Mok </h2> <img src="./image/lance.png" />
          <div >
            <h4 style={{fontWeight: "700"}}> Tools of Experience </h4>
            <List>
            online web apps, OpenGL, WebGL full stack development
            electronics sensor design
            robotics sensor API stacks: ROS framework, C++ API
            </List>
            
            <h4 style={{fontWeight: "700"}  }> Education </h4>
            <li> BEng. of Mechanical Engineering, Nanyang Technological University </li>
            <li> Diploma in Mechanical Engineering, Singapore Polytechnic </li>
          </div>
          </Card>
        </div>

        <div className="center">
       
          <Paper className="center-paper" style={{maxHeight: '600px', overflow: 'auto'}}>
            <List style={{maxHeight: '100%', overflow: 'auto'}}>
            <Paper variant="outlined"  style={{background: "#a3a3a3", padding: "1.5em"}}>
            <h4 style={{fontWeight: "700"}}> Education </h4>
              <li> BEng. of Mechanical Engineering, Nanyang Technological University </li>
              <li> Diploma in Mechanical Engineering, Singapore Polytechnic </li>
            </Paper>
            <Paper variant="outlined"  style={{background: "#a3a3a3", padding: "1.5em"}}>
            <h4 style={{fontWeight: "700"}}> Education </h4>
              <li> BEng. of Mechanical Engineering, Nanyang Technological University </li>
              <li> Diploma in Mechanical Engineering, Singapore Polytechnic </li>
            </Paper>
            <Paper variant="outlined"  style={{background: "#a3a3a3", padding: "1.5em"}}>
            <h4 style={{fontWeight: "700"}}> Education </h4>
              <li> BEng. of Mechanical Engineering, Nanyang Technological University </li>
              <li> Diploma in Mechanical Engineering, Singapore Polytechnic </li>
            </Paper>
            <Paper variant="outlined"  style={{background: "#a3a3a3", padding: "1.5em"}}>
            <h4 style={{fontWeight: "700"}}> Education </h4>
              <li> BEng. of Mechanical Engineering, Nanyang Technological University </li>
              <li> Diploma in Mechanical Engineering, Singapore Polytechnic </li>
            </Paper>
            <Paper variant="outlined"  style={{background: "#a3a3a3", padding: "1.5em"}}>
            <h4 style={{fontWeight: "700"}}> Education </h4>
              <li> BEng. of Mechanical Engineering, Nanyang Technological University </li>
              <li> Diploma in Mechanical Engineering, Singapore Polytechnic </li>
            </Paper>
            <Paper variant="outlined"  style={{background: "#a3a3a3", padding: "1.5em"}}>
            <h4 style={{fontWeight: "700"}}> Education </h4>
              <li> BEng. of Mechanical Engineering, Nanyang Technological University </li>
              <li> Diploma in Mechanical Engineering, Singapore Polytechnic </li>
            </Paper>
            <Paper variant="outlined"  style={{background: "#a3a3a3", padding: "1.5em"}}>
            <h4 style={{fontWeight: "700"}}> Education </h4>
              <li> BEng. of Mechanical Engineering, Nanyang Technological University </li>
              <li> Diploma in Mechanical Engineering, Singapore Polytechnic </li>
            </Paper>
            </List> 
          </Paper>

        </div>

        <div className="right">
          <Paper variant="outlined" >


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
