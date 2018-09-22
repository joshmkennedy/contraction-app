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
      hover:false,
      display:1,
      amountToAverage: 5
    }
    
  }
  
  switchRecordType=()=>{
    if(this.props.on){
    this.state.contraction 
      ? this.setState({ contraction: false }) 
      : this.setState({contraction:true})
  }
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
  buttonHover=()=>{
    this.setState({
      hover:!this.state.hover
    })
  }
  buttonColor = ()=>{
   if(this.props.on){ 
      if(this.state.contraction){
        if(this.state.hover){
          return this.props.colors.darkerRed
        }
        return this.props.colors.red
      }else if(!this.state.contracting){
        if(this.state.hover){
          return this.props.colors.darkerDarkBlue
        }
        return this.props.colors.darkBlue
      }
    }else{
     if (this.state.hover) {
        return this.props.colors.darkerDarkBlue
      }
        return this.props.colors.darkBlue
      }
    }
         
  nextDisplay= ()=>{
    if(this.state.display !== 3){
     return this.setState({display:this.state.display +1})
    }else{
      return this.setState({display:1})
    }
  }
  prevDisplay= ()=>{
    if (this.state.display !== 1) {
      return this.setState({ display: this.state.display - 1 })
    } else {
      return this.setState({ display: 3 })
    }
  }
  handleAverageAmount = (event) => {
    this.setState({
      amountToAverage: event.target.value
    })
  }
  
  render() {
    const sliderBtn = {
      height: '30px',
      width: "30px",
      background: this.props.colors.purple,
      display:'flex',
      flexBasis:'30px',
      borderRadius:'5px',
      flexFlow:'column',
      color:'white',
      justifyContent:'center',
      alignItems:'center'

    }
    return (
      <div style={{
        position:'relative',
        height:'auto',
        display:'flex',
        justifyContent:'space-around',
        flexFlow:'column',
        marginBottom:'0',
        alignItems:'center',
        padding:'20px',

      }}><div 
          style={{
            width: '200px',

          }}>
          average the:
        <select value={this.state.amountToAverage} onChange={this.handleAverageAmount.bind(this)} >
          <option value={5}>last 5</option>
          <option value={10}>last 10</option>
          <option value={20}>last 20</option>
          <option value={100}>all items</option>
        </select>
        </div>
        <div style={{
          display:'flex',
          height:'300px',
          width:'100%',
          justifyContent:'space-between',
          padding:'20px',
          alignItems:'center',
          minHeight:'300px',
          margin:'auto 0'
        }}>
          <span 
          style={sliderBtn} 
          onClick={this.prevDisplay}> {'<'} </span>
          <div style={{
            boxShadow: '0 0 20px rgba(0,0,0,0.2)',
            display:'block',
            width:'100%',
            height:'100%',
            margin:'10px',
            padding:'0',
            borderRadius:'20px'
          }}>
            
            {this.state.display===1? <Averages dataAverage={this.state.recordArray} amountToAverage={this.state.amountToAverage} colors={this.props.colors} />:''}
            {this.state.display === 2 ? <Chart data={this.state.recordArray} svgWidth='700' svgHeight='300' colors={this.props.colors}/> : ''}
            {this.state.display === 3 ? <History BgColor={this.state.contraction} colors={this.props.colors} allRecords={this.state.recordArray} /> : ''}
          </div>
          <span 
            style={sliderBtn}
            onClick={this.nextDisplay}>{'>'}</span>
        </div>
          <button 
            style={{
              width:'90%',
              background:this.buttonColor(),
              minHeight:'75px',
              fontSize:'24px',
              color:'white',
              display:'flex',
              justifyContent:'space-between',
              alignItems:'center',
              lineHeight:'0',
              padding:'0 30px',
              borderRadius:'20px',
              boxShadow: '0 0 20px rgba(0,0,0,0.2)',  
              

            }}
            onMouseEnter={this.buttonHover}
            onMouseLeave={this.buttonHover} 
            onClick={this.props.on?this.recordTheTime.bind(this):this.props.start}
            >
            <span> 
              {!this.props.on ? "START" : this.state.contraction 
                ? "Record Contraction" 
                : "Record Rest"
              } 
              </span>
            {this.props.parsedTime}
          </button> 
      </div>
    )
  }
}
