import './App.css'
import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import ContactPage from './Pages/Contact';
import { Routes,Route } from 'react-router-dom';
import './App.css'
import NavBar from './Navbar';
import User from './Pages/User';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<h1>This is base location....</h1>}/>
        <Route path='/Home' element={<HomePage/>}/>
        <Route path='Contact' element={<ContactPage/>}/>
        <Route path='/About' element={<AboutPage/>}/>
        <Route path ='*' element={<h1>404 Not Found Error</h1>}/>
        <Route path='/user/:name' element = {<User/>}/>
      </Routes>
      {/* <HomePage />
      <AboutPage />
      <ContactPage /> */}
    </>
  );
}

export default App;
