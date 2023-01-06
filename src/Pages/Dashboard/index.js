
import React from 'react';
import GroupedBarChartGender from '../../components/GroupedBarChart';
import GroupedBarChartAge from '../../components/GroupedBarChartAge';
import ToggleButton from '../../components/ToggleButton';
import Navbar from '../../components/Navbar'
import PieCharte from '../../components/PieChart';


const Dashboard = () => {

    const [data, setData] = React.useState([]);

    React.useEffect(() => {

        fetch('http://localhost:8080/api/employee')
            .then(response => response.json()
                .then(data => setData(data)))

    })

    const [select, handleSelect] = React.useState('Genero')


    return (



        <div className="App">
            <Navbar />
            <div style={{width:"80%",borderRadius:10, margin:"auto",marginTop:8,boxShadow: "8px 8px 8px 8px #9E9E9E"}}>
                <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
                    <div>
                    <ToggleButton  onToggle ={(select)=>handleSelect(select)}/>
                    </div>

                <div style={{display:"flex",justifyContent:"center"}}>
                <PieCharte  data={data} select={select} />
                <GroupedBarChartGender data={data} select={select}/>
                <GroupedBarChartAge data={data} select={select} />
                </div>

                <div style={{display:"flex"}}>

                    <div style={{display:"flex", justifyContent:"center",width:400}}>
                  
                    </div>

                    <div style={{display:"flex", justifyContent:"center",width:400}}>
                   
                    </div>

                    <div style={{display:"flex", justifyContent:"center",width:400}}>
                   
                    </div>  
                
                </div>
                </div>
               
               
            </div>


        </div>
    )

}

export default Dashboard