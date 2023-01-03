import Plot from "react-plotly.js";

const GroupedBarChartAge = (props) =>{

    

    const _data = props.data


    const female_age_arr = _data.filter(employee => employee.gender ==='Female').map(employee => {return employee.age})
    const female_age_average = female_age_arr.map(Number).reduce((a, b) => a + b, 0) / female_age_arr.length 

    const male_age_arr = _data.filter(employee => employee.gender ==='Male').map(employee => {return employee.age})
    const male_age_average = male_age_arr.map(Number).reduce((a, b) => a + b, 0) / male_age_arr.length 

    
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
  
  var data = [plot1, plot2];
      return(
        <Plot
        data={data}
        layout={ {width: 400, height: 500, title: 'Média de idade por Genero'} } />
      )
  }


export default GroupedBarChartAge