import Plot from "react-plotly.js";

const GroupedBarChartGender = (props) =>{

    
    
  if (props.select ==="Genero") {
    const _data = props.data


    const female_salary_arr = _data.filter(employee => employee.gender ==='Female').map(employee => {return employee.salary})
    const female_salary_average = female_salary_arr.map(Number).reduce((a, b) => a + b, 0) / female_salary_arr.length 

    const male_salary_arr = _data.filter(employee => employee.gender ==='Male').map(employee => {return employee.salary})
    const male_salary_average = male_salary_arr.map(Number).reduce((a, b) => a + b, 0) / male_salary_arr.length 


    var other_salary_arr = _data.filter(employee => employee.gender ==='Other').map(employee => {return employee.salary})
    var other_salary_average = other_salary_arr.map(Number).reduce((a, b) => a + b, 0) / other_salary_arr.length 
    if (isNaN(other_salary_average)){
      other_salary_average = 0
    }
    
    var plot1 = {
    
    y: [female_salary_average],
    name: "Média salarial feminina: "+ female_salary_average,
    type: "bar",
  };
  
  var plot2 = {
    
    y: [male_salary_average],
    name: "Média salarial masculina: "+ male_salary_average,
    type: "bar",
  };
  var plot3 = {
    
    y: [other_salary_average],
    name: "Média salarial de outros: "+ other_salary_average,
    type: "bar",
  };
  var data = [plot1, plot2,plot3];
}if(props.select ==="Senioridade"){

  const _data = props.data


  var junior_salary_arr = _data.filter(employee => employee.seniority ==='Junior').map(employee => {return employee.salary})
  var junior_salary_average = junior_salary_arr.map(Number).reduce((a, b) => a + b, 0) / junior_salary_arr.length 

  var pleno_salary_arr = _data.filter(employee => employee.seniority ==='Pleno').map(employee => {return employee.salary})
  var pleno_salary_average = pleno_salary_arr.map(Number).reduce((a, b) => a + b, 0) / pleno_salary_arr.length 

  var senior_salary_arr = _data.filter(employee => employee.seniority ==='Senior').map(employee => {return employee.salary})
  var senior_salary_average = senior_salary_arr.map(Number).reduce((a, b) => a + b, 0) / senior_salary_arr.length 

  if (isNaN(junior_salary_average)){
    junior_salary_average = 0
  }
  if (isNaN(pleno_salary_average)){
    junior_salary_average = 0
  }
  if (isNaN(senior_salary_arr)){
    senior_salary_arr = 0
  }
  var plot1 = {
  
  y: [junior_salary_average],
  name: "Média salarial junior: "+ junior_salary_average,
  type: "bar",
};

var plot2 = {
  
  y: [pleno_salary_average],
  name: "Média salarial pleno: "+ pleno_salary_average,
  type: "bar",
};

var plot3 = {
  
  y: [senior_salary_average],
  name: "Média salarial pleno: "+ senior_salary_average,
  type: "bar",
};

var data = [plot1, plot2,plot3];

}
  
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