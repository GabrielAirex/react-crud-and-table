import Table from './components/Table'
import Modal from './components/Modal'

import Navbar from './components/Navbar'
import './resetStyle.css'
import './App.css'
import SendIcon from '@mui/icons-material/Send';






function App() {

  


  return (
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
  );
}

export default App;
