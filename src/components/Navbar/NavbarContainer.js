import React, {useEffect} from 'react'
import { connect} from 'react-redux'
import Preloader from '../Preloader/Preloader.js'
import Navbar from './Navbar.js'
import { compose } from 'redux';



const NavbarContainer =(props) =>{
	
if(!props.myId)return (<Preloader />)
            	 return (<Navbar userId={props.myId}/>)}


 const mapStateToProps = (state) => {
   return {   		   
   		   myId:state.auth.id,		             
    }
}
  
  export default compose(
     connect(mapStateToProps,)
 )(NavbarContainer)
