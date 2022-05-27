import React, {useEffect} from 'react'
import { connect} from 'react-redux'
import Preloader from '../Preloader/Preloader.js'
import {getClientProfile} from '../../redux/ProfileReducer.js'
import Navbar from './Navbar.js'
import { compose } from 'redux'

const NavbarContainer =(props) =>{
	let userId
	props.myId?userId=props.myId:<Preloader />
    useEffect(()=>{getClientProfile(userId)},[userId]) //для Profile измененного userId

	  return (
		<Navbar userId={userId}/>)
}

const mapStateToProps = (state) => {
  return { 
  		   
  		   myId:state.auth.id,
		             
   }
}
  export default compose(
    connect(mapStateToProps, {getClientProfile})
   
)(NavbarContainer)
