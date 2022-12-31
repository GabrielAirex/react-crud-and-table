import { Button } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '../Modal'

const OptionButton = (props) =>{

const deleteRow =()=>{
   
     deleteData('http://localhost:8080/api/employee', props.row)
}
      
async function deleteData (url='', data ={})
{
    const response = await fetch(url, {
        method: 'DELETE', 
        mode: 'cors', 
        cache: 'no-cache', 
    
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) 
      });
      return response.json(); 
    }


    return (<>

        <Button onClick ={deleteRow} variant="outlined" >
        <DeleteIcon />
        </Button>
        
       

        <Modal condicional ="true" data = {props.row} >
        <EditIcon  />

        </Modal>
        
        </>)
        
}







export default OptionButton

