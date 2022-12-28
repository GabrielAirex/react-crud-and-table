import { Button } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const OptionButton = (props ) =>{


return (<>

<Button onClick ={()=>{ console.log(props.id)}} variant="outlined" >
<DeleteIcon />
</Button>

<Button onClick ={()=>{console.log(props.cellValues.row.id)}} variant="contained">
<EditIcon />
</Button>
</>)


}

export default OptionButton

