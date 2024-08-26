import Home from '../src/pages/Home'
import { HelmetProvider } from 'react-helmet-async';
import './App.css'
import '@fontsource/lexend';
function App() {


  return (
    <>
    <HelmetProvider>
     <Home />
     </HelmetProvider>
 
    </>
  )
}

export default App
