import HeaderContainer from './components/Header/HeaderContainer.js'
<<<<<<< HEAD
import React from 'react'
import s from './App.module.css'
import Navbar from './components/Navbar/Navbar.js'
import Main from './components/Main/Main.js'
import ClientsContainer from './components/Clients/ClientsContainer.js'
import ProfileContainer from './components/Profile/ProfileContainer.js'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import LoginContainer from './components/Login/LoginContainer.js'


function App( ) {
  

=======
import React from 'react';
import s from './App.module.css';
import Navbar from './components/Navbar/Navbar.js';
import Main from './components/Main/Main.js';
import ClientsContainer from './components/Clients/ClientsContainer.js';
import Profile from './components/Profile/Profile.js';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import LoginContainer from './components/Login/LoginContainer.js';


function App() {
>>>>>>> 2c1173b9aa6a4ae08dd3abfc90e2e8fb577702e0
  return (
    
          <div className={s.app_wrapper}>
            <div className={s.header} ><HeaderContainer/></div>
            <div className={s.navbar}><Navbar /></div>
            
            <div className={s.infopage}>
              <Routes>
                <Route path="/main" element={<Main/>} />
                <Route path="/users" element={<ClientsContainer/>} />
<<<<<<< HEAD
                <Route path="/profile/:userId" element={<ProfileContainer/>} />
=======
                <Route path="/profile" element={<Profile/>} />
>>>>>>> 2c1173b9aa6a4ae08dd3abfc90e2e8fb577702e0
                <Route path="/login" element={<LoginContainer/>} />
              </Routes> 
            </div>
          </div>
        
  );
}

<<<<<<< HEAD

=======
>>>>>>> 2c1173b9aa6a4ae08dd3abfc90e2e8fb577702e0
export default App;
