import React, { Component } from 'react'

export default class Chart extends Component {
    
       transformData = ()=>{

           const {data} = this.props
           if(data.length>1){
            const time=data.map(record=>record.time)
            const points = time.map((y,x)=>{
                  return {x,y}
            })
            const getMinX = points[0].x
            const getMaxX = points[points.length-1].x
            
            const getMinY = points.reduce((min,p)=>p.y<min?min:p.y, points[0].y)
            const getMaxY = points.reduce((max,p)=>p.y>max?max:p.y, points[0].y)

               const  getSvgX=(x) =>{
                       
                       return this.props.svgWidth-(x / getMaxX * this.props.svgWidth);
                 }
              const   getSvgY=(y)=> {
                       const { svgHeight } = this.props;
                       return svgHeight - (y / getMaxY * svgHeight);
                 }
            let pathD = "M " + getSvgX(points[0].x )+" "+ getSvgY(points[0].y)+" "
            pathD += points.map((point,i)=>{
                  return "L " + getSvgX(point.x) + " " + getSvgY(point.y) + " "
            })
                 return (
                 <path d={pathD} style={{ stroke: 'blue', fill: 'none', strokeWidth: '1' }}></path>
                 )
      }
      }
      render() {
           const {svgWidth, svgHeight} = this.props
            return (
                  <div style={{background:'white'}}>
                  
                        <svg viewBox={`0 0  ${svgWidth} ${svgHeight}`}>
                             
                              {this.transformData()}   
                        </svg>
                  </div>
            );
      }

 

}
