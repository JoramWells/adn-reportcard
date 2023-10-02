import './App.css';
import {Routes, Route} from 'react-router-dom'
import Index from './layouts';
import './css/home.css'
import './css/aboutUs.css'
import About from './layouts/about';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/about-us' element={<About />} />

    </Routes>
  );
}

export default App;
