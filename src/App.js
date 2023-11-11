import logo from './logo.svg';
//import Component1 from './component1';
import MedicineForm from './form';
import LandingPage from './Landingpage';
import { Navbar } from 'react-bootstrap';
import NavScrollExample from './Navbar';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard';
function App() {
  return (
    <>
    <BrowserRouter>
    <NavScrollExample/>
      <Routes>
        <Route element={<LandingPage/>} path="/"/>
        <Route element={<MedicineForm/>} path="/addmedicine"/>
        <Route element={<Dashboard/>} path="/Dashboard"/> 
      </Routes>
    </BrowserRouter>

    </>
  );
}
export default App