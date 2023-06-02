import './App.css';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Auditor from './components/Auditor';
import Account from './components/Account';
import NotFound from './components/NotFound';
import Unauthorized from './components/Unauthorized';

function App() {

  //check if the roles listed == the current user's role
  const RoleAccess = ({roles = []}) => {
    var getRole = sessionStorage.getItem("role");
    return !roles.length || roles.includes(getRole)
      ? <Outlet/> : <Navigate to='/unauthorized' replace/>;
  };

  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path="/unauthorized" element={<Unauthorized />} />
      
      {/* Home can be access by anyone  [page 1]*/}
      <Route element={<RoleAccess roles={["root", "customer", "associate", "auditor"]}/>}>
        <Route path='/home' element={<Home/>}></Route>
      </Route>

      {/* Manage account can be access by root and associate aka (view only not edit/add) [page 2]*/}
      <Route element={<RoleAccess roles={["root", "associate"]}/>}>
        <Route path='/account' element={<Account/>}/>
      </Route>

      {/* Audtor page can be access by root, auditor [page 3]*/}
      <Route element={<RoleAccess roles={["root", "auditor", "associate"]}/>}>
        <Route path='/auditor' element={<Auditor/>}/>
      </Route>

      <Route path='*' element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
