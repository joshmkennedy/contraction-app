import React, { Component } from 'react'

export default class Chart extends Component {
    
       transformData = (data, color)=>{

           /* const {data} = this.props */
           if(data.length>1){
                  const points= data.map((y,x)=>{
                        return {x,y}
                  })
                  console.log(points)
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
                  <path d={pathD} style={{ stroke: color, fill: 'none', strokeWidth: '3' }}></path>
                  )
            }else{
                  return 'NEED MORE DATA'
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
                        <g style={{stroke:this.props.colors.green,}} >
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
      contractionData = (data)=>{
            const time = data.filter(data => data.contracting)
                  .map(data => data.time)
                  console.log(time)
            return this.transformData(time, this.props.colors.red)
      }
      restData = (data)=>{
            const time = data.filter(data=>!data.contracting)
                        .map(data=>data.time)
            return this.transformData(time, this.props.colors.darkBlue)                        
      }
      enoughtDataToRender=()=>{
            const { svgWidth, svgHeight } = this.props
         if(this.props.data.length>4){
                        return (
                     <div style={{
                           background: 'white', display: 'inline-block', textAlign: 'centernopm',
                           width: '100%',
                           boxSizing: 'border-box',
                           height: '100%',
                           borderRadius: '20px',
                           display: 'flex',
                           flexFlow: 'wrap',
                           justifyContent: 'space-around',
                           alignItems: 'center'
                     }}>

                         <div>
                               <h4 style={{color:this.props.colors.red}}>Contractions</h4>
                              <svg viewBox={`0 0  ${svgWidth} ${svgHeight}`} height='145' style={{ border: `2px solid ${this.props.colors.red}`, borderRadius: '20px', background: '#f59b95' }}>
                                    {/*this.props.dataAverage.length<2?"RECORD MORE DATA":*/}
                                    {this.contractionData(this.props.data, this.props.colors.red)}
                                    {this.axis()}
                              </svg>
                         </div>
                           <div>
                              <h4 style={{color:this.props.colors.darkBlue}}>Rests</h4>
                              <svg viewBox={`0 0  ${svgWidth} ${svgHeight}`} height='145' style={{ border: `2px solid ${this.props.colors.darkBlue}`, borderRadius: '20px', background: '#83a6cc' }}>
                                    {this.restData(this.props.data)}
                                    {this.axis()}
                              </svg>
                           </div>
                     </div>
               )
               
         }else{
               
               return <h3>not enough</h3>
         }
      }
      render() {
            return (this.enoughtDataToRender())
      }

 

}
