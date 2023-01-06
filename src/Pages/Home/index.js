import Table from '../../components/Table'
import Modal from '../../components/Modal'
import Navbar from '../../components/Navbar'
import SendIcon from '@mui/icons-material/Send';
import { ToggleButton } from '@mui/material';
import ReactToPdf from 'react-to-pdf'
import React from 'react';

const Home =() =>{


    
        

    return(

        <div className="App">
            <Navbar />
    
            <div className='Table_content'>
            <Table />
            </div>
            <div className='Modal' >
            <Modal condicional="false" data={{}} mode="post">
            Register   <SendIcon style={{marginLeft:8}}/>

           
            </Modal>
            </div>
      </div>
    )
}

export default Home