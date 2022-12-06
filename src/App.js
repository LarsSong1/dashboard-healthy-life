import './App.css';
import Healthylife from './paginas/healthylife';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Dashboard from './paginas/dashboard';
import Mantenimiento from './paginas/dashboard_m';
import Historiam from './paginas/historiam';
import Horarios from './paginas/horarios';
import Agendas from './paginas/agendas';
import Recetas from './paginas/recetas';
import Consultas from './paginas/consultas';
import Cuenta from './paginas/cuenta';
import Login from './paginas/login';





function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Healthylife/>}/>
          <Route path='/dashboard/' element={<Dashboard/>}/>
          <Route path='/mantenimiento' element={<Mantenimiento/>}/>
          <Route path='/historia-clinica' element={<Historiam/>}/>
          <Route path='/horarios' element={<Horarios/>}/>
          <Route path='/agendas' element={<Agendas/>}/>
          <Route path='/recetas' element={<Recetas/>}/>
          <Route path='/consultas' element={<Consultas/>}/>
          <Route path='/cuenta' element={<Cuenta/>}/>
          <Route path='/login' element={<Login/>}/>
          

        </Routes>
      </BrowserRouter>  
      

    </div>
  );
}

export default App;
