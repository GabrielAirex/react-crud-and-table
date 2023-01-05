import Plot from "react-plotly.js";



const PieCharte = (props) =>{

    const _data = props.data

    const female_num = _data.filter(employee => employee.gender ==='Female').length
    const man_num = _data.filter(employee => employee.gender ==='Male').length
    const other_num = _data.filter(employee => employee.gender ==='Other').length
    
    var data = [
        {
          values: [man_num, female_num, other_num],
          labels: ["Homem "+ man_num, "Mulher "+ female_num, "Outros "+other_num],
          type: "pie",
        },
      ];
  
      return(
        <Plot
        data={data}
        layout={ {width: 370, height: 400} } />
      )
  }

  export default PieCharte