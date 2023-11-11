//import Component1 from './component1';
import MedicineForm from './Medicine-form';
import LandingPage from './firstpage';
import { Navbar } from 'react-bootstrap';
import NavScrollExample from './Navigation';
import { BrowserRouter,Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
    <NavScrollExample/>
      <Routes>
        <Route element={<LandingPage/>} path="/"/>
        <Route element={<MedicineForm/>} path="/addmedicine"/>      
      </Routes>
    </BrowserRouter>

    </>
  );
}
export default App;