import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'role', headerName: 'Role', width: 130 },
  { field: 'gender', headerName: 'Gender', width: 130 },
  { field: 'cpf', headerName: 'CPF', width: 130 },
  { field: 'seniority', headerName: 'Seniority', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];


export default function DataTable() {
  const [rows,setRows] = React.useState([]);

  React.useEffect( ()=> {
    
     fetch('http://localhost:8080/api/employee')
    .then(response => response.json()
    .then(data => setRows(data)))
    
  })
  
  return (
    <div style={{ height: 700, width: '100%' }}>
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
