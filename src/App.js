import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './components/Layout.js'; 
import TodoList from "./components/Pages/js/todo/all/TodoList.js"
import Home from './components/Pages/js/Home.js';
import NoPage from './components/Pages/js/NoPage.js'
import AddTodo from './components/Pages/js/todo/add/AddTodo.js';
import Login from './components/Pages/js/login/Login.js';
import ResetPW from './components/Pages/js/accounts/passwort/reset/ResetPW.js'
import Signup from './components/Pages/js/accounts/signup/Signup.js';
import TodoLayout from './components/Pages/js/todo/TodoLayout.js';
import AccountsLayout from './components/Pages/js/accounts/AccountsLayout.js';
import PasswordLayout from './components/Pages/js/accounts/passwort/PasswordLayout.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 

          <Route path='todo' element={<TodoLayout/>}>
            <Route index element={<TodoList />} /> 
            <Route path="all" element={<TodoList />}/>
            <Route path='add' element={<AddTodo />} />
          </Route>

          <Route path='login' element={<Login />} />

          <Route path='accounts' element={<AccountsLayout/>}>
            <Route path="signup" element={<Signup />}/>
            <Route path="password" element={<PasswordLayout />} >
              <Route path='reset' element={<ResetPW />} />
            </Route>
          </Route>

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
);
}

        


export default App;
