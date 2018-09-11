import React, { Component } from 'react';
import Menu from './components/Menu.js'
import Stats from './components/Stats.js'
import Timer from './components/Timer.js'
import './App.css';

class App extends Component {
  
  parseTime = (time) => {
    let seconds = time
    const hours = Math.floor(seconds / 3600)
    seconds = seconds % 3600
    const minutes = Math.floor(seconds / 60)
    seconds = seconds % 60

    const displayedHours = hours < 10 ? `0${hours}` : hours
    const displayedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const displayedSeconds = seconds < 10 ? `0${seconds}` : seconds

    const formatted = `${displayedHours}:${displayedMinutes}:${displayedSeconds}`
    return formatted
  }
  
  render() {
    const styles = {
      textAlign: 'center',
      //fontSize: 45+'px'
      //width: 100 + '%'
    }
    const topBar = {
      padding:30+'px',
      background:'pink',
      display:'flex',
      justifyContent:'space-between'
    }
    const title = {
      color:'white',
    }
    return (
      <div>
      <Timer>
        {({ on, softReset, mystop, time})=>(
          <div style={styles}>
              <div style={topBar}>
              <h1 style={title}>Contraction Timer</h1>
              <button onClick={mystop}>{on ? "pause" : "start"}</button>
              </div>
              {this.parseTime(time)}
              <Stats time ={time} softReset={softReset} parsedTime={this.parseTime(time)} on={on}/>
          </div>
        )}
      </Timer >  

      </div>
    );
    
  }
}

export default App;
