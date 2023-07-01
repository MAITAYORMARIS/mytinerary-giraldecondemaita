import './App.css';
import NavBar from './components/nav';
import Inicio from './components/inicio';
import Footer from './components/footer';
import Cities from './components/cities';
import City from "./components/citydetail"
import { Routes, Route } from 'react-router-dom';
import {ThemeProvider} from '@mui/material/styles';
import theme from './components/themeConfig'

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <NavBar />
      <Routes>
        <Route path="*" element={<Inicio />}></Route>
        <Route path='/home' element={<Inicio />}></Route>
        <Route path='/cities' element={<Cities />}></Route>
        <Route path='/city/:id' element={<City />}></Route>
      </Routes >
      <Footer />

      </ThemeProvider>
      

    </div >
  );
}

export default App;
