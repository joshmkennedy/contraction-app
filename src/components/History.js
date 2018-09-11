import React, { Component } from 'react'

export default class History extends Component {
  
  
      
  
      render() {
        return (
            <div>
                  <ul>

                        {this.props.allRecords.map((record, i, )=>{
                             let styles ={}
                             if(record.contracting){styles={ background:"red"}}
                             else{styles={background:"green"}}
                              return(
                                    <li style={styles} key={i}>{record.parsedTime}</li>
                              )
                        })
                        }
                  </ul>
            </div>
      )
      }
}
