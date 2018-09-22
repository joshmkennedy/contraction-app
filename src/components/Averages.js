import React, { Component } from 'react'

export default class Averages extends Component {
  
      constructor(props){
            super(props)
            this.state = {
                  
            }
      }
      
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
      AverageTheData = (data) => {
            if (data.length > 0) {
                  const amountToAverage = this.props.amountToAverage
                  const time = data
                        .map(record => record.time)
                        .filter((record, index) => index < amountToAverage)

                  const sum = time.reduce((total, record) => {
                        return total + record
                  }, 0)
                  //console.log(time)
                  //console.log(data.length)
                  const average = sum / time.length
                  const roundedAverage = this.parseTime(Math.round(average))
                  return (roundedAverage)
            } else {
                  return `00:00:00`
            }
      }
      seperateContractions = (data)=>{
            const contracting = data.filter(time=> time.contracting===true )
            return this.AverageTheData(contracting)
      }
      seperateNonContractions = (data)=>{
            const nonContracting = data.filter(time => time.contracting !== true)
           return this.AverageTheData(nonContracting)
      }
      render() {
            const AverageTimeContracting = this.seperateContractions(this.props.dataAverage)
            const avergeTimeBetweenContractin = this.seperateNonContractions(this.props.dataAverage)
            return (
                  <div style={{
                        background:this.props.colors.lightGrey,
                        height:'100%',
                        width:'100%',
                        boxSizing:'border-box',
                        borderRadius:'20px',
                        padding:'5%',
                        display:'flex',
                        flexFlow:'column',
                        justifyContent:'center',
                        alignItems:'start'


                  }}>
                        
                        <div style={{
                              fontSize:'30px',
                              textAlign:'left',
                               paddingBottom:'20px',  
                               display:'flex',
                               flexFlow:'wrap',
                               justifyContent:'space-between',
                               width:'100%',
                               color:this.props.colors.red,
                        }}><span>Average Contraction Duration:</span> <span>{AverageTimeContracting}</span></div>
                        <div style={{
                              fontSize: '30px',
                              textAlign: 'left',
                              paddingBottom:'20px',
                              display:'flex',
                              flexFlow: 'wrap',
                              justifyContent:'space-between',
                              width:'100%',
                              color: this.props.colors.darkBlue,
                        }}>Average Rest Duration: <span>{avergeTimeBetweenContractin}</span></div>
                  </div>
            )
      }
}
