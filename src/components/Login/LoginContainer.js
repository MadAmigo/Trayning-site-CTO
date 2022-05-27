import React, { useState, useEffect } from 'react';
import { connect} from 'react-redux';
import { compose } from 'redux';
import Login from './Login.js';
import {postLogin} from './../../redux/authReducer.js';





const LoginContainer = (props)=>{

const onSubmit=(formData)=> {
  props.postLogin(formData)
 }
 
<<<<<<< HEAD

	return (
		<Login onSubmit={onSubmit} isAuth={props.isAuth} hasAuthError={props.hasAuthError}/>
=======
console.log('props.isAuth',props.isAuth)
	return (
		<Login onSubmit={onSubmit} isAuth={props.isAuth}/>
>>>>>>> 2c1173b9aa6a4ae08dd3abfc90e2e8fb577702e0
		)
}

const mapStateToProps = (state) => {
  return { isAuth:state.auth.isAuth,
<<<<<<< HEAD
           hasAuthError: state.auth.hasAuthError
=======
>>>>>>> 2c1173b9aa6a4ae08dd3abfc90e2e8fb577702e0
   };
  }; 




  export default compose(
    connect(mapStateToProps, {postLogin}),//тут postLogin - санккріейтор,
    //        який connect обертає в колбек,і вже його визиває вище в onSubmit 
   
)(LoginContainer)

