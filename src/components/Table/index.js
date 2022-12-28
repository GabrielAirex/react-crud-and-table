import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import OptionButton from '../OptionButton';


function getID(params) {
  console.log(params.row.id)
  return params.row.id ;
}
const columns  = [
  { field: 'id', headerName: 'ID', width: 70 } ,
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,

  },

  { field: 'role', headerName: 'Role', width: 200 },
  { field: 'gender', headerName: 'Gender', width: 130 },
  { field: 'cpf', headerName: 'CPF', width: 130 },
  { field: 'seniority', headerName: 'Seniority', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 50,
  },

  {
    headerName: 'Option',
    width: 300,
    renderCell: (cellValues) => <OptionButton id={cellValues.row} />,
  }
];


export default function DataTable() {
  const [rows,setRows] = React.useState([]);

  React.useEffect( ()=> {
    
     fetch('http://localhost:8080/api/employee')
    .then(response => response.json()
    .then(data => setRows(data)))
    
  })
  
  return (
    <div style={{ height: 700, width: '80%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        //checkboxSelection
      />
    </div>
  );
}
