import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import OptionButton from '../OptionButton';





const columns  = [
  { field: 'id', headerName: 'ID', width: 60 } ,
  {
    field: 'name',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 150,
    valueGetter: (params) =>
    `${params.row.name || ''} ${params.row.lastname || ''}`,

  },

  { field: 'role', headerName: 'Role', width: 200 },
  { field: 'gender', headerName: 'Gender', width: 70 },
  { field: 'cpf', headerName: 'CPF', width: 130 },
  { field: 'seniority', headerName: 'Seniority', width: 90 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 70,
    
  },

  {
    headerName: 'Option',
    width: 280,
    renderCell: (cellValues) => <OptionButton row={cellValues.row} />,
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
    <div style={{ height: 'auto', width: '77%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
      />
    </div>
  );
}
