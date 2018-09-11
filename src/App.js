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
      fontSize: '45px'
    }

    return (
      <div>
      <h1>Contraction Timer</h1>
      <Timer>
        {({ on, softReset, mystop, time})=>(
            <div style={styles}>
              {this.parseTime(time)}
              <button onClick={mystop}>{on ? "pause" : "start"}</button>
              <Stats time ={time} softReset={softReset} parsedTime={this.parseTime(time)} on={on}/>
          </div>
        )}
      </Timer >  

      </div>
    );
    
  }
}

export default App;
