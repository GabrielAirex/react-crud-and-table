import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form';
import Table from './components/Table'
import './App.css'


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




function App() {

  const [employees, setEmployee] = useState([])


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
    <div className="App">

      <div className='Table_content'>
      <Table />
      </div>
      <div className='Central'>
        <Form onRegister={
          employee => onRegistered(employee)
        } />
        


      </div>


    </div>
  );
}

export default App;
