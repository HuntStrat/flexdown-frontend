
import { HelmetProvider } from 'react-helmet-async';
import './App.css'
import '@fontsource/lexend';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home'
import SignUp from './pages/auth/SignUp';
import UserForm from './pages/UserForm';
function App() {


  return (
    
        <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/userform" element={<UserForm />} />
      
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
 
    
  )
}

export default App
