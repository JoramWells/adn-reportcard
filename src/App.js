import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Index from './layouts';
import './css/home.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
    </Routes>
  );
}

export default App;
