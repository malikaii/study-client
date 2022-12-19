import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/home';
import CreateSet from './CreateSet/create-set';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/createset' element={<CreateSet/>}/>
      </Routes>
    </div>
  );
}

export default App;
