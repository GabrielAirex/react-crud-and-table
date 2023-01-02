import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';





const style = {
  width: '100%',
  borderRadius: 8,
  bgcolor: 'background.paper',
};

export default function ListDividers(props) {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary={"Nome: "+ props.data.name+" "+ props.data.lastname} />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary={"Idade: "+ props.data.age} />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary={"Email: "+ props.data.email} />
      </ListItem>
      <ListItem button divider>
        <ListItemText primary={"Numero: "+ props.data.phone} />
      </ListItem>
      <ListItem button>
        <ListItemText primary={"Genero: "+ props.data.gender} />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary={"Status Civil: "+ props.data.marital} />
      </ListItem>
      <ListItem button>
        <ListItemText primary={"Salario: "+ props.data.salary} />
      </ListItem>
      <ListItem button>
        <ListItemText primary={"Cargo: "+ props.data.role} />
      </ListItem>
      <ListItem button>
        <ListItemText primary={"Senioridade: "+ props.data.seniority} />
      </ListItem>
    </List>
  );
}