import './App.css';
import { useState } from 'react';
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
import Header from "./Layout/Header"
import UserState from './Layout/UserState';

function App() {

  const [state, setState] = useState(false);

  return (
      <UserState>
        {!state ? <Routes>
          <Route path="/" element={<Login authenticate={() => setState(true)} />} />
          <Route path="/Registration" exact element={<Adduser />} />
        </Routes> :
        <>
        <Header logout={() => setState(false)}/>
        <Sidebar>
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Users" exact element={<Users />} />
            <Route path="/Customer" exact element={<Customer />} />
            <Route path="/Users/Adduser" exact element={<Adduser />} />
            <Route path="/Users/Userlist" exact element={<Userlist />} />
          </Routes>
        </Sidebar>
        </>}
      </UserState>
  );

}
export default App;
