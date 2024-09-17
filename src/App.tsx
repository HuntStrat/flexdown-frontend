
import { HelmetProvider } from 'react-helmet-async';
import './App.css'
import '@fontsource/lexend';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home'
import SignUp from './pages/auth/SignUp';
import UserForm from './pages/UserForm';
import Login from './pages/auth/Login';

function App() {


  return (
    
        <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        
          <Route path="/userform" element={<UserForm />} />

          <Route path="/login" element={<Login />} />
      
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
 
    
  )
}

export default App
