import React, { Component } from 'react'

export default class History extends Component {
  
  constructor(props){
        super(props)
        this.state = {
              showList:false,
        }
  }
      toggle=()=>{
            this.setState({showList: !this.state.showList})
      }
  
      render() {
        return (

            <div
            style={{
                          textAlign: "left",
                              
                          width: '250px',
            }}
            >
                    <button style={{
                          padding: "10px 15px",
                          background: this.props.colors.yellow,
                    }}
                    onClick={this.toggle}>
                        {this.state.showList ? "hide history" : "show history"}
                    </button>
                    <div style={{
                          height: '400px',
                          overflow: "scroll"
                    }}>
                        
                       {this.state.showList? (
                                <ul style={{
                                textAlign: "left",
                                listStyle: 'none',
                                width: '250px',

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
                       ):''}
                    </div>
      
            </div>
        )
      }
}
