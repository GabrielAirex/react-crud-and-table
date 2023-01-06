import Plot from "react-plotly.js";

const GroupedBarChartAge = (props) =>{

    
  const _data = props.data
  if (props.select ==="Genero") {



    var female_age_arr = _data.filter(employee => employee.gender ==='Female').map(employee => {return employee.age})
    var female_age_average = female_age_arr.map(Number).reduce((a, b) => a + b, 0) / female_age_arr.length 

    var male_age_arr = _data.filter(employee => employee.gender ==='Male').map(employee => {return employee.age})
    var male_age_average = male_age_arr.map(Number).reduce((a, b) => a + b, 0) / male_age_arr.length 

    var other_age_arr = _data.filter(employee => employee.gender ==='Other').map(employee => {return employee.age})
    var other_age_average = other_age_arr.map(Number).reduce((a, b) => a + b, 0) / other_age_arr.length 
    
    if (isNaN(female_age_average)){
      female_age_average = 0
    }
    if (isNaN(male_age_average)){
      male_age_average = 0
    }
    if (isNaN(other_age_average)){
      other_age_average = 0
    }
    var plot1 = {
    
    y: [female_age_average],
    name: "Média idade feminina: "+ female_age_average,
    type: "bar",
  };
  
  var plot2 = {
    
    y: [male_age_average],
    name: "Média idade masculina: "+ male_age_average,
    type: "bar",
  };
  var plot3 = {
    
    y: [other_age_average],
    name: "Média idade de outros: "+ other_age_average,
    type: "bar",
  };

}if(props.select ==="Senioridade"){

  
  var female_age_arr = _data.filter(employee => employee.seniority ==='Junior').map(employee => {return employee.age})
  var female_age_average = female_age_arr.map(Number).reduce((a, b) => a + b, 0) / female_age_arr.length 

  var male_age_arr = _data.filter(employee => employee.seniority ==='Pleno').map(employee => {return employee.age})
  var male_age_average = male_age_arr.map(Number).reduce((a, b) => a + b, 0) / male_age_arr.length 


  var senior_age_arr = _data.filter(employee => employee.seniority ==='Senior').map(employee => {return employee.age})
  var senior_age_average = male_age_arr.map(Number).reduce((a, b) => a + b, 0) / senior_age_arr.length 


  if (isNaN(female_age_average)){
    female_age_average = 0
  }
  if (isNaN(male_age_average)){
    male_age_average = 0
  }
  if (isNaN(senior_age_average)){
    senior_age_average = 0
  }
  
  var plot1 = {
  
  y: [female_age_average],
  name: "Média idade Junior: "+ female_age_average,
  type: "bar",
  }
  var plot2 = {
  
    y: [male_age_average],
    name: "Média idade Pleno: "+ male_age_average,
    type: "bar",
  };
  
  var plot3 = {
    
    y: [senior_age_average],
    name: "Média idade Senior: "+ senior_age_average,
    type: "bar",
  };
  
  
  }



  var data = [plot1, plot2,plot3];
      return(
        <Plot
        data={data}
        layout={ {width: 330, height: 400, showlegend: true,
          legend: {
            x: 0,
            y: 2
          },
          title: {
            text:`Media de idade por ${props.select}`,
            font: {
              
              size: 14
            },
            xref: 'paper',
            
            y:0.05
          }} } />
      )
        }
      
  


export default GroupedBarChartAge