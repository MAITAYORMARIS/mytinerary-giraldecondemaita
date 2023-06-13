import './App.css';
import NavBar from './components/nav';
import Inicio from './components/inicio';
import Footer from './components/footer';
import Cities from './components/cities';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="*" element={<Inicio />}></Route>
        <Route path='/Home' element={<Inicio />} ></Route>
      <Route path='/Cities' element={<Cities />} ></Route>
      </Routes >
    <Footer />

    </div >
  );
}

export default App;
