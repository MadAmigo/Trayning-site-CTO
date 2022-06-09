import React, {  useEffect } from 'react';
import { connect} from 'react-redux';
import { compose } from 'redux';
import Header from './Header.js';
import {getAuthData, unLogin} from './../../redux/authReducer.js';
import {Selectors} from '../../redux/selectors.js'

const HeaderContainer = (props)=>{
   
   useEffect(()=>{props.getAuthData()},[]) 

	return (
		<Header isAuth={props.isAuth}
            unLogin={props.unLogin}       
    />
		)
}

const mapStateToProps = (state) => {
  return { isAuth: Selectors.getIsAuth(state),  		   
   }
} 

export default compose(
    connect(mapStateToProps, {getAuthData,unLogin}),
    )(HeaderContainer)

