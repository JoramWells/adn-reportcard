import './App.css';
import {Routes, Route} from 'react-router-dom'
import Index from './layouts';
import './css/home.css'
import About from './layouts/about';
import Contact from './layouts/contact';
import Register from './layouts/register';
import Login from './layouts/login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/about-us' element={<About />} />
      <Route path='/contact-us' element={<Contact />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
