import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import Dropdown from './Dropdown';
import Progress from './Progress'

class App extends Component {
  constructor(props){
    super(props);
    // where state goes!! this.state = { // user's progress (dance moves mastered)}
    this.state = {
      user1: {}, 
      user2: {}, 
      user3: {}
    };
    // bind functions
    this.updateProgress = this.updateProgress.bind(this);
    // componentdidmount -> fetch request
  }

  updateProgress(){
    this.setState({
      user1: {}, // would contain info from database
      user2: {},
      user3: {}
    })
  }

  render(){
    return (
        <div>
          <h1 className="title">Dance To Be Free</h1>

          <div id="banner">
            <header id="header">Welcome!</header>
            <form className="loginInfo">
              <input type="text" className="formtext" placeholder="Username"></input>
            </form>
            <form className="loginInfo">
              <input type="text" className="formtext" placeholder="Password"></input>
            </form>
            <button className="button3" onClick={() => console.log("Welcome back!")}>Login</button>
            <div id="newUser">New dancer?</div>
            <button className="button3" onClick={() => console.log("Hi there!")}>Sign Up</button>
          </div>

          <div className="body">
            <div className="leftside"></div>
            <Dropdown updateProgress={this.props.updateProgress} />
          </div>
            <Progress updateProgress={this.props.updateProgress}/>
            {/* <div className="progress">
              Dance moves mastered
            </div> */}
           
           
            
            {/* <div className="rightside">
                <label id="label">Upper Body Moves</label>
                <select id="updropdown" onClick={() => console.log("upclicked!")}>
                  <option value="chooseupbo">Choose one</option>
                  <option value="arm wave">Arm wave</option>
                  <option value="isolation">Isolation</option>
                </select>
                <label id="label">Lower Body Moves</label>
                <select id="lodropdown" onClick={() => console.log("loclecked!")}>
                  <option value="chooselobo">Choose one</option>
                  <option value="happy feet">Happy feet</option>
                  <option value="moonwalk">Moonwalk</option>
                </select>
                <label id="label">Full Body Moves</label>
                <select id="fulldropdown" onClick={() => console.log("fullclocked!")}>
                  <option value="choosefubo">Choose one</option>
                  <option value="full body wave">Body roll</option>
                  <option value="running man">Running man</option>
                </select>
            </div> */}
        </div>
    )
  }
}

export default App;