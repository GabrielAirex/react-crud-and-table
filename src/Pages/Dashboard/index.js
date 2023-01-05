
import React from 'react';
import GroupedBarChartGender from '../../components/GroupedBarChart';
import GroupedBarChartAge from '../../components/GroupedBarChartAge';
import Navbar from '../../components/Navbar'
import PieCharte from '../../components/PieChart';


const Dashboard = () => {

    const [data, setData] = React.useState([]);

    React.useEffect(() => {

        fetch('http://localhost:8080/api/employee')
            .then(response => response.json()
                .then(data => setData(data)))

    })

    return (



        <div className="App">
            <Navbar />
            <div style={{width:"80%",borderRadius:10, margin:"auto",marginTop:8,boxShadow: "8px 8px 8px 8px #9E9E9E"}}>
                <div style={{display:"flex",justifyContent:"center"}}>
                
                <PieCharte  data={data} />
                <GroupedBarChartGender data={data} />
                <GroupedBarChartAge data={data} />
                </div>
               
               
            </div>


        </div>
    )

}

export default Dashboard