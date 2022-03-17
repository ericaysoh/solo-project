import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';

class Dropdown extends Component {
  constructor(props){
    super(props);
    this.changeMove = this.changeMove.bind(this);
  }

  changeMove(){
    const label = document.querySelector("#label");
    const moves = updropdown.value;
    console.log('poopie');
    fetch ('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ moves: moves }),
    })
    .then((res) => (console.log(res.json, 'yo yo yo', moves)));
    console.log('yayayyyy');
  }

  render(){
    return (
      <div className="rightside">
        <label id="label">Upper Body Moves</label>
        <select id="updropdown" onChange={() => this.changeMove()}>
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
    )
  }
}

export default Dropdown;