import React, { Component } from 'react'
import History from './History.js'
import Averages from './Averages'
import Chart from './Chart.js'

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
  createdata = ()=>{
    const data =[{x:0,y:0}]
    if(this.state.recordArray.length>0){
    const times = this.state.recordArray
      .map(record=>record.time)
     times.forEach((record, i)=>{
       data.push({x:record,y:i})
       //console.log(data[0].x)
       return this.data

     })  
    }
  }
       

  
  render() {
    
    return (
      <div>
        <Chart data={this.state.recordArray}  svgWidth='700' svgHeight='300' />
        {this.props.on
        ?<button onClick={this.recordTheTime.bind(this)}>record {this.state.contraction? "contraction":"rest"}</button>:''
        }
       <Averages  dataAverage={this.state.recordArray} />
        <History BgColor={this.state.contraction} colors={this.props.colors} allRecords={this.state.recordArray}/>


      </div>
    )
  }
}
