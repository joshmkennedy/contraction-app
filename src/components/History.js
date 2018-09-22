import React, { Component } from 'react'

export default class History extends Component {
  
  constructor(props){
        super(props)
        this.state = {

        }
  }
     /*  toggle=()=>{
            this.setState({showList: !this.state.showList})
      } */
  
      render() {
        return (

            <div
            style={{
                          textAlign: "left",
                              
                         
            }}
            >
               
                    
                    <div style={{
                          height: '300px',
                          overflow: "scroll",
                          borderRadius:'20px',
                          boxShadow:'inset 0 0 4px rgba(0,0,0,0.3)',
                    }}>
                                <ul className='history' style={{
                                textAlign: "left",
                                listStyle: 'none',
                                margin:'0',
                                padding:'0',
                                color:'white',
                                fontSize:'20px',
                          }}>

                                {this.props.allRecords.map((record, i, ) => {
                                      let styles = ''
                                      if (record.contracting) { styles = this.props.colors.red }
                                      else { styles = this.props.colors.darkBlue }
                                      return (
                                            <li style={{
                                                  background: styles,
                                                  padding: "10px 15px"

                                            }}
                                                  key={i}>
                                                  {record.contracting ? "contraction: " : "rest: "}{record.parsedTime}
                                            </li>
                                      )
                                })
                                }
                          </ul>
                      
                    </div>
                    
            </div>
             
        )
      }
}
