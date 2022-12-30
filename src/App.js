import Table from './components/Table'
import Modal from './components/Modal'

import Navbar from './components/Navbar'
import './resetStyle.css'
import './App.css'






function App() {

  


  return (
    <div className="App">
      <Navbar />

      <div className='Table_content'>
      <Table />
      </div>
      <div className='Modal'>
      <Modal />
      </div>
    </div>
  );
}

export default App;
