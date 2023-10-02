import './App.css';
import {Routes, Route} from 'react-router-dom'
import Index from './layouts';
import './css/home.css'
import About from './layouts/about';
import Contact from './layouts/contact';
import Register from './layouts/register';
import Login from './layouts/login';
import ForgotPasword from './layouts/forgotPasword';
import Admin from './layouts/admin';
import Chat from './layouts/chat';
import Discussion from './layouts/discussion';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/about-us' element={<About />} />
      <Route path='/contact-us' element={<Contact />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/forgort-password' element={<ForgotPasword />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/chat' element={<Chat />} />
      <Route path='/discussion' element={<Discussion />} />




    </Routes>
  );
}

export default App;
