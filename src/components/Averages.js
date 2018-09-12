import React, { Component } from 'react'

export default class Averages extends Component {
  
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
            if(data.length>0){

            const time = data
                              .filter(index=>index<10)
                              .map(record=>record.time)
            const sum = time.reduce((total, record)=>{
                  return total + record
            }, 0)
            const average = sum/time.length
            const roundedAverage = this.parseTime(Math.round(average))
            return(roundedAverage)
      }else{
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
                  <div>
                        <div>Average Contraction Duration: {AverageTimeContracting}</div>
                        <div>Average Rest Duration: {avergeTimeBetweenContractin}</div>
                  </div>
            )
      }
}
