import './App.css';
import { useContext } from 'react';
import React from 'react';
import {
  Route,
  Routes,
} from "react-router-dom";

import Sidebar from './Components/Sidebar';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Adduser from './pages/Adduser';
import Userlist from './pages/Userlist'
import Customer from './pages/Customer';
import Login from "./pages/Login";
import UserContext from './Layout/UserContext';
import Customerlist from './pages/Customer/Customerlist';
import Addcustomer from './pages/Customer/Addcustomer';
import Displaycustomer from './pages/Customer/Displaycustomer';
import Pagenotfound from './pages/Pagenotfound';

function App() {

  const [state] = useContext(UserContext);

  return (
    <>
      {!state ? <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Registration" exact element={<Adduser />} />
        <Route path="*" exact element={<Pagenotfound />} />
      </Routes> :
        <>
          <Sidebar>
            <Routes>
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Users" exact element={<Users />} />
              <Route path="/Customer" exact element={<Customer />}>
                <Route path="/Customer/Customerlist" exact element={<Customerlist />} />
                <Route path="/Customer/AddCustomer" exact element={<Addcustomer />} />
                <Route path=':id' element={<Displaycustomer />} />
              </Route>
              <Route path="/Users/Adduser" exact element={<Adduser />} />
              <Route path="/Users/Userlist" exact element={<Userlist />} />
              <Route path="*" exact element={<Pagenotfound />} />
            </Routes>
          </Sidebar>
        </>}
    </>
  );

}
export default App;
