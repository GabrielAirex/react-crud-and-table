import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Form from '../Form';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
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



    //setEmployee([...employees, employee])

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



   
  }
  

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
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
            
          <Form onRegister={
          employee => onRegistered(employee)
        } />




          </Box>
        </Fade>
      </Modal>
    </div>
  );
}