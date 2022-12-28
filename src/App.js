import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form';
import Table from './components/Table'
import Modal from './components/Modal'
import './App.css'






function App() {

  


  return (
    <div className="App">
      <Modal />
      <div className='Table_content'>
      <Table />
      </div>
      <div className='Central'>  
      </div>
    </div>
  );
}

export default App;
