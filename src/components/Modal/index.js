import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Form from '../Form';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: 8,
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST', 
      mode: 'cors', 
      cache: 'no-cache', 
  
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
    });
    return response.json(); 
  }




  async function putData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'PUT', 
      mode: 'cors', 
      cache: 'no-cache', 
  
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
    });
    return response.json(); 
  }
  
  
  async function getData(url = '') {
    const response = await fetch(url, {
      method: 'GET', 
      mode: 'cors', 
      cache: 'no-cache', 
  
      headers: {
        'Content-Type': 'application/json'
      },
    });
    return response.json(); 
  }

  const [employees, setEmployee] = React.useState([])


  const onRegistered = (employee) => {

  if(props.mode ==="post"){
    postData('http://localhost:8080/api/employee', employee)
    .then((data) => {
      console.log("POST OK"); 
    });
  
    getData('http://localhost:8080/api/employee')
    .then((data) => {
      //console.log(data); 
      setEmployee(data)
      
    }).then(
      console.log(employees)
    );
  }else{


    putData('http://localhost:8080/api/employee', employee)
    .then((data) => {
      console.log("POST OK"); 
    });
  
    getData('http://localhost:8080/api/employee')
    .then((data) => {
      //console.log(data); 
      setEmployee(data)
      
    }).then(
      console.log(employees)
    );


  }

  




   
  }
  
  return (


    <div >
      <Button  variant="contained" onClick={handleOpen}>{props.children}</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            
          <Form condicional ={props.condicional} mode={props.mode} data = {props.data} onRegister={
          (employee) => onRegistered(employee)
        } />
        
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}