import HeaderContainer from './components/Header/HeaderContainer.js'
import React from 'react'
import s from './App.module.css'
import Navbar from './components/Navbar/Navbar.js'
import Main from './components/Main/Main.js'
import ClientsContainer from './components/Clients/ClientsContainer.js'
import ProfileContainer from './components/Profile/ProfileContainer.js'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import LoginContainer from './components/Login/LoginContainer.js'


function App( ) {
  

  return (
    
          <div className={s.app_wrapper}>
            <div className={s.header} ><HeaderContainer/></div>
            <div className={s.navbar}><Navbar /></div>
            
            <div className={s.infopage}>
              <Routes>
                <Route path="/main" element={<Main/>} />
                <Route path="/users" element={<ClientsContainer/>} />
                <Route path="/profile/:userId" element={<ProfileContainer/>} />
                <Route path="/login" element={<LoginContainer/>} />
              </Routes> 
            </div>
          </div>
        
  );
}


export default App;
