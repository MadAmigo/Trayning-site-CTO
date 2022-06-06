import HeaderContainer from './components/Header/HeaderContainer.js'
import React, {Component} from 'react'
import s from './App.module.css'
import NavbarContainer from './components/Navbar/NavbarContainer.js'
import Main from './components/Main/Main.js'
import ClientsContainer from './components/Clients/ClientsContainer.js'
import { Routes, Route} from 'react-router-dom'
import LoginContainer from './components/Login/LoginContainer.js'
import { connect} from 'react-redux'
import { compose } from 'redux'
import Preloader from './Common/Preloader/Preloader.js'
import {checkInishial} from './redux/AppReduser.js'
import {getSelectorInitial} from './redux/selectors.js'
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer.js'))

class App extends Component {
  componentDidMount(props){
    this.props.checkInishial()
  }
  
render() {
if (!this.props.isInitial) return <Preloader />
    return (
    
          <div className={s.app_wrapper}>
            <div className={s.header} ><HeaderContainer/></div>
            <div className={s.navbar}><NavbarContainer /></div>
            
            <div className={s.infopage}>
              <Routes>
                <Route path="/main" element={<Main/>} />
                <Route path="/users" element={<ClientsContainer/>} />
                <Route path="/profile/:userId" element={
                                      <React.Suspense fallback={<>...</>}>
                                        <ProfileContainer />
                                      </React.Suspense>
                                      } />
                <Route path="/login" element={<LoginContainer/>} />
                <Route path="*" element={<NoMatch />} />
              </Routes> 
            </div>
          </div>       
  )}
}

const NoMatch = () => {
  return <p>There's nothing here: 404!</p>;
}

const mapStateToProps = (state) => {
  return { isInitial: getSelectorInitial(state)}    
   }
 
export default compose(
               connect(mapStateToProps,{checkInishial}) )(App)
