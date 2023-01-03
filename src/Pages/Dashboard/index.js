
import React from 'react';
import GroupedBarChartGender from '../../components/GroupedBarChart';
import GroupedBarChartAge from '../../components/GroupedBarChartAge';
import Navbar from '../../components/Navbar'
import PieCharte from '../../components/PieChart';


const Dashboard = () =>{

    const [data,setData] = React.useState([]);

    React.useEffect( ()=> {
      
       fetch('http://localhost:8080/api/employee')
      .then(response => response.json()
      .then(data => setData(data)))
      
    })

    return(



        <div className="App">
            <Navbar />
            
            <PieCharte data ={data}/>
            <GroupedBarChartGender data ={data}/>
            <GroupedBarChartAge data ={data}/>
         
        </div> 
    )
 
}

export default Dashboard