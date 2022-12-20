import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form';
import './App.css'

function App() {

  const [employees, setEmployee] = useState([])


  const onRegistered = (employee) => {



    setEmployee([...employees, employee])

    console.log(employees)
  }


  return (
    <div className="App">


      <Banner />
      <div className='Central'>
        <Form onRegister={
          employee => onRegistered(employee)
        } />

      </div>


    </div>
  );
}

export default App;
