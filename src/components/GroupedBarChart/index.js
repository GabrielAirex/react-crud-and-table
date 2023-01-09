import Plot from "react-plotly.js";

const GroupedBarChartGender = (props) =>{


  const getAverage = ((filter)=> {

    const _data = props.data

    if(props.core ==="salary"){
    var filter_array = _data.filter((employee) => {if (props.select==="Genero") {return employee.gender ===filter} else {return employee.seniority === filter}}).map(employee => {return employee.salary})
  }if(props.core ==="age"){
    var filter_array = _data.filter((employee) => {if (props.select==="Genero") {return employee.gender ===filter} else {return employee.seniority === filter}}).map(employee => {return employee.age})

  }
    var average = filter_array.map(Number).reduce((a, b) => a + b, 0) / filter_array.length 

    if (isNaN(average)){
      average = 0
    } 


    return Number(Math.floor(average))

  })


  const getPlot = (()=>{
    if (props.select ==="Genero") {
   

      var plot1 = {
      
      y: [getAverage('Female')],
      name: "Média salarial feminina: "+ getAverage('Female',"salary"),
      type: "bar",
    };
    
    var plot2 = {
      
      y: [getAverage('Male')],
      name: "Média salarial masculina: "+ getAverage('Male'),
      type: "bar",
    };
    var plot3 = {
      
      y: [getAverage('Other')],
      name: "Média salarial de outros: "+ getAverage('Other'),
      type: "bar",
    };

    return {plot1,plot2,plot3}
  }if(props.select ==="Senioridade"){

    var plot1 = {
    
    y: [getAverage('Junior')],
    name: "Média salarial junior: "+ [getAverage('Junior')],
    type: "bar",
  };
  
  var plot2 = {
    
    y: [getAverage('Pleno')],
    name: "Média salarial pleno: "+ [getAverage('Pleno')],
    type: "bar",
  };
  
  var plot3 = {
    
    y: [getAverage('Senior')],
    name: "Média salarial pleno: "+ [getAverage('Senior')],
    type: "bar",
  };
  return {plot1,plot2,plot3}
  
  
  }else {

    var plot1 = {
    
      y: [0],
      name: "",
      
    };
    
    var plot2 = {
      
      y: [0],
      name: "",
     
    };
    
    var plot3 = {
      
      y: [0],
      name: "",
     
    };
    return {plot1,plot2,plot3}
    
  }

  })
    const plots = getPlot()

    var data = [plots.plot1,plots.plot2,plots.plot3]

 

  
      return(
        <Plot
        data={data}
        layout={ {width: 330, height: 400, showlegend: true,
          legend: {
            x: 0,
            y: 2
          },          title: {
            text:`Media salarial por ${props.select}`,
            font: {
              
              size: 14
            },
            xref: 'paper',
            
            y:0.05
          } } }/>
      )
  }


export default GroupedBarChartGender