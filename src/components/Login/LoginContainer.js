import React, { useState, useEffect } from 'react';
import { connect} from 'react-redux';
import { compose } from 'redux';
import Login from './Login.js';
import {postLogin} from './../../redux/authReducer.js';





const LoginContainer = (props)=>{

const onSubmit=(formData)=> {
  props.postLogin(formData)
 }
 
console.log('props.isAuth',props.isAuth)
	return (
		<Login onSubmit={onSubmit} isAuth={props.isAuth}/>
		)
}

const mapStateToProps = (state) => {
  return { isAuth:state.auth.isAuth,
   };
  }; 




  export default compose(
    connect(mapStateToProps, {postLogin}),//тут postLogin - санккріейтор,
    //        який connect обертає в колбек,і вже його визиває вище в onSubmit 
   
)(LoginContainer)

