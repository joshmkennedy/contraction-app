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
                              
                          width: '75%',
            }}
            >
               
                    
                    <div style={{
                          height: '400px',
                          overflow: "scroll"
                    }}>
                                <ul style={{
                                textAlign: "left",
                                listStyle: 'none',
                                width: '75%',
                          }}>

                                {this.props.allRecords.map((record, i, ) => {
                                      let styles = ''
                                      if (record.contracting) { styles = this.props.colors.red }
                                      else { styles = this.props.colors.green }
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
