import React, { Component } from 'react'
import History from './History.js'
import Averages from './Averages'

export default class Stats extends Component {

  constructor(props){
    super(props)
    this.state = {
      recordArray:[],
      contraction:true,
    }
    
  }
  
  switchRecordType=()=>{
    this.state.contraction 
      ? this.setState({ contraction: false }) 
      : this.setState({contraction:true})
  }

  recordTheTime=()=>{
     this.setState({
      recordArray: [{
          contracting:this.state.contraction,
          time:this.props.time,
          parsedTime:this.props.parsedTime
        },
        ...this.state.recordArray],
    })
    this.switchRecordType()
    this.props.softReset()
  }
  
     

  
  render() {
    
    return (
      <div>
        
        {this.props.on
        ?<button onClick={this.recordTheTime.bind(this)}>record {this.state.contraction? "contraction":"rest"}</button>:''
        }
       <Averages  dataAverage={this.state.recordArray} />
        <History BgColor={this.state.contraction}  allRecords={this.state.recordArray}/>

      </div>
    )
  }
}
