import './resetStyle.css'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard';
import About from './Pages/About';




function App() {

  


  return (
    
    <Router>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/about' element={<About />}/>
    </Routes>
  </Router>
  );
}

export default App;
