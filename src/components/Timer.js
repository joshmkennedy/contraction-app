import React, { Component } from 'react'

export default class Timer extends Component {
      constructor(props){
            super(props)
            this.state = {
                  time:0,
                  on:false,
                  allTime:0
            }     
      }
     
      componentDidMount(){
            setInterval(() => {
                  if (this.state.on) {
                        this.setState({time:this.state.time+1})   
                  }
            },1000)
      } 
      
      mystop = () => {
            if(this.state.on === true) {
                  this.setState({on: false})
            }else {
                  this.setState({
                        on:true, 
                  })
            }
      }
      reset=()=>{
            if (this.state.on === true) {
                  this.setState({ on: false, time:0 })  
            }else{this.setState({time:0})}    
      }
      softReset = ()=>{
            this.setState({ time: 0 })
      }

   

      render() {
          
            const { children } = this.props
        return (
              <div>
                    
            
            {children({
                          time: this.state.time,
                          mystop:this.mystop, 
                          on:this.state.on, 
                          softReset:this.softReset  
                  //reset: this.reset,
                  
                  
            })}
               </div>   
            
            )
      }
}
