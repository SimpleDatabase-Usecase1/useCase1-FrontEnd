import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Auditor from './components/Auditor';
import Account from './components/Account';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/auditor" element={<Auditor/>}/>
      <Route path="/account" element={<Account/>}/>
    </Routes>
  );
}

export default App;
