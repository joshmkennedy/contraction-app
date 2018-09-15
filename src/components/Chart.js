import React, { Component } from 'react'

export default class Chart extends Component {
    
       transformData = ()=>{

           const {data} = this.props
           if(data.length>1){
            const time=data.map(record=>record.time)
            const points = time.map((y,x)=>{
                  return {x,y}
            })
            //const getMinX = points[0].x
            const getMaxX = points[points.length-1].x
            
            //const getMinY = points.reduce((min,p)=>p.y<min?p.y:min, points[0].y)
            const getMaxY = points.reduce((max,p)=>p.y>max?p.y:max, points[0].y)

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
      axis = () => {
            const { data } = this.props
            if (data.length > 1) {
                  const time = data.map(record => record.time)
                  const points = time.map((y, x) => {
                        return { x, y }
                  })
                  const getMinX = points[0].x 
                  const getMinY = points.reduce((min, p) => p.y < min ? p.y : min, points[0].y)
                  const getMaxX = points[points.length - 1].x 
                  const getMaxY = points.reduce((max, p) => p.y > max ? p.y : max, points[0].y)

                  const getSvgX = (x) => {
                        return this.props.svgWidth - (x / getMaxX * this.props.svgWidth);
                  }
                  const getSvgY = (y) => {
                        const { svgHeight } = this.props;
                        return svgHeight - (y / getMaxY * svgHeight);
                  }
                  return(
                        <g style={{stroke:'red'}} >
                              <line
                                    x1={getSvgX(getMaxX)} y1={getSvgY(getMinY)}
                                    x2={getSvgX(getMinX)} y2={getSvgY(getMinY)}
                              />
                              <line
                                    x1={getSvgX(getMaxX)} y1={getSvgY(getMinY)}
                                    x2={getSvgX(getMaxX)} y2={getSvgY(getMaxY)}
                              />
                       </g>
                  ) 
      }}
      render() {
           const {svgWidth, svgHeight} = this.props
            return (
                  <div style={{background:'white', display:'inline-block',textAlign:'center'}}>
                  
                        <svg viewBox={`0 0  ${svgWidth} ${svgHeight}`} height='300'>
                             
                              {this.transformData()} 
                              {this.axis()}  
                        </svg>
                  </div>
            );
      }

 

}
