import Plot from "react-plotly.js";

const GroupedBarChartGender = (props) =>{

    

    const _data = props.data


    const female_salary_arr = _data.filter(employee => employee.gender ==='Female').map(employee => {return employee.salary})
    const female_salary_average = female_salary_arr.map(Number).reduce((a, b) => a + b, 0) / female_salary_arr.length 

    const male_salary_arr = _data.filter(employee => employee.gender ==='Male').map(employee => {return employee.salary})
    const male_salary_average = male_salary_arr.map(Number).reduce((a, b) => a + b, 0) / male_salary_arr.length 

    
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
  
  var data = [plot1, plot2];
      return(
        <Plot
        data={data}
        layout={ {width: 400, height: 500, title: 'Média salarial por Genero'} } />
      )
  }


export default GroupedBarChartGender