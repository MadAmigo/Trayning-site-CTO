import React from 'react'
import { connect} from 'react-redux'
import Navbar from './Navbar.js'
import { compose } from 'redux'
import {Selectors} from '../../redux/selectors.js'

const NavbarContainer =(props) =>{
	           return (<Navbar userId={props.myId}/>)}

 const mapStateToProps = (state) => {
   return { myId: Selectors.getMyId(state)  		    		  	             
    }
}  
  export default compose(
     connect(mapStateToProps,)
 )(NavbarContainer)
