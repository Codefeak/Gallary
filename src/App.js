import React, { Component } from 'react';
import LeftPannel from './LeftPannel';
import RightPannel from './RightPannel';
import MidPannel from './MidPannel';
import data from './data.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
        data:data,
        individualData : "",
        classShow:"show",
    }
    this.handleClick=this.handleClick.bind(this);
    this.filter = this.filter.bind(this);
  }
  
  filter(data,x){
    return data.filter(item=>{
      return ((item.alt===x) && item)})
  }

  handleClick(e){
    const tmp = this.filter(this.state.data, e.target.alt);
    this.setState({individualData:tmp, classShow:'hide'});
    console.log(this.state.prevState);
  }
  
    render() {
    return (
      
      <div className="main-container">
        <div className="left-container">
          <LeftPannel data={this.state.individualData} classShow={this.state.classShow}/>
        </div>
        <div className="right-container">
          <RightPannel data={this.state.individualData} classShow={this.state.classShow}/>
        </div>
        <div className="mid-container">
          <MidPannel data={this.state.data} click={this.handleClick}/>
        </div>
      </div>
    );
  }
}

export default App;
