
import React from 'react';
import GroupedBarChartGender from '../../components/GroupedBarChart';
import GroupedBarChartAge from '../../components/GroupedBarChartAge';
import ToggleButtonEdited from '../../components/ToggleButtonEdited';
import Navbar from '../../components/Navbar'
import PieCharte from '../../components/PieChart';
import ReactToPdf from 'react-to-pdf'
import { Button, ToggleButton } from '@mui/material';

const Dashboard = () => {

    const [data, setData] = React.useState([]);

    React.useEffect(() => {

        fetch('http://localhost:8080/api/employee')
            .then(response => response.json()
                .then(data => setData(data)))

    })

    const [select, handleSelect] = React.useState('Genero')

    const ref = React.createRef();
    const options = {
        orientation: 'landscape',
        unit: 'in',
    
        
    };

    return (



        <div className="App">
            <Navbar />
            <div style={{width:"80%",borderRadius:10, margin:"auto",marginTop:8,boxShadow: "8px 8px 8px 8px #9E9E9E"}}>
                <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                    <ToggleButtonEdited  onToggle ={(select)=>handleSelect(select)}/>
                    <ReactToPdf targetRef={ref} filename={`dados medidos com parametro ${select}`} options={options}>
                    {({toPdf}) => (
                        <ToggleButton onClick={toPdf}>Gerar pdf</ToggleButton>
                    )}
                </ReactToPdf>
                    </div>
               
                <div ref={ref}>

                <div style={{display:"flex",justifyContent:"center",marginTop:24}}> 
                <PieCharte  data={data} select={select} />
                <GroupedBarChartGender data={data} select={select}/>
                <GroupedBarChartAge data={data} select={select} />
                </div> 
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