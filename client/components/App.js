import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props){
      super(props);
  }
  render(){
    return (
        <div>
          <h1>Dancing Squirrels!</h1>
          <div id="banner">
          <header>Welcome!</header>
            <div>Login</div>
            <form className="username">
              <input type="text" className="formtext" placeholder="Username"></input>
            </form>
            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
            <form className="username">
              <input type="text" className="formtext" placeholder="Password"></input>
            </form>
            <div>New squirrel?</div>
            <button className="button3" onClick={() => console.log("clocked!")}>Sign Up</button>
          </div>
          <div className="body">
            <div className="leftside">
          
            </div>

            <div className="rightside">
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
            </div>
          </div>
        </div>
    )
  }
}

export default App;