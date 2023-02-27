import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './components/Layout.js';
import TodoList from "./components/Pages/js/todo/all/TodoList.js"
import Home from './components/Pages/js/Home.js';
import NoPage from './components/Pages/js/NoPage.js'
import AddTodo from './components/Pages/js/todo/add/AddTodo.js';
import Login from './components/Pages/js/accounts/login/Login.js';
import ResetPW from './components/Pages/js/accounts/passwort/reset/ResetPW.js'
import Register from './components/Pages/js/accounts/register/Register.js';
import TodoLayout from './components/Pages/js/todo/TodoLayout.js';
import AccountsLayout from './components/Pages/js/accounts/AccountsLayout.js';
import PasswordLayout from './components/Pages/js/accounts/passwort/PasswordLayout.js';
import FormWrapper from './components/FormWrapper.js';
import Logout from "./components/Pages/js/accounts/logout/Logout.js"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* Protected Routes*/}
          <Route path='todo' element={<TodoLayout />}>
            <Route index element={<TodoList />} />
            <Route path="all" element={<TodoList />} />
            <Route path='add' element={<AddTodo />} />
          </Route>

          {/* Partially Protected Routes*/}
          <Route path='accounts' element={<AccountsLayout />}>
            <Route path="register" element={<FormWrapper formType={<Register />} />} />
            <Route path='login' element={<FormWrapper formType={<Login />} />} />
            <Route path='logout' element={<FormWrapper formType={<Logout />} />} />
            <Route path="password" element={<PasswordLayout />} >
              <Route path='reset' element={<ResetPW />} />
            </Route>
          </Route>

          {/* Catch all*/}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
