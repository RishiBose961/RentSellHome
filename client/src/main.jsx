import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Profile from './pages/Profile/Profile.jsx';
import NewCreate from './pages/NewCreate/NewCreate.jsx';
import Search from './components/Search/Search.jsx';
import Login from './pages/Auth/Login.jsx';
import Register from './pages/Auth/Register.jsx';

const router = createBrowserRouter(
  
   
  createRoutesFromElements(
  <>
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/new' element={<NewCreate/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Route>
  </>
  )

);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
