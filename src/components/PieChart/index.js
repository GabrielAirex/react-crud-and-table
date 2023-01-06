import Plot from "react-plotly.js";



const PieCharte = (props) =>{

    const _data = props.data

    if (props.select ==="Genero") {
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
        }else if(props.select ==="Senioridade"){


          const junior_num = _data.filter(employee => employee.seniority ==='Junior').length
          const pleno_num = _data.filter(employee => employee.seniority ==='Pleno').length
          const senior_num = _data.filter(employee => employee.seniority ==='Senior').length
          
          var data = [
              {
                values: [junior_num, pleno_num, senior_num],
                labels: ["Junior "+ junior_num, "Pleno "+ pleno_num, "Senior "+senior_num],
                type: "pie",
              },
            ];



      
        }
  
      return(
        <Plot
        data={data}
        layout={ {width: 330, height: 400, showlegend: true,
          legend: {
            x: 0,
            y: 2
          },
          title: {
            text:`Quantidade de colaboradores por ${props.select}`,
            font: {
              
              size: 14
            },
            xref: 'paper',
            
            y:0.05
          },} } />
      )
  }

  export default PieCharte