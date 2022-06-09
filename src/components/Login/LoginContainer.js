import React from 'react'
import { connect} from 'react-redux'
import { compose } from 'redux'
import Login from './Login.js'
import {postLogin} from './../../redux/authReducer.js'
import {Selectors} from '../../redux/selectors.js'

const LoginContainer = (props)=>{

const onSubmit=(formData)=> {
  props.postLogin(formData)
 }
 
	return (
		<Login onSubmit={onSubmit} isAuth={props.isAuth} hasAuthError={props.hasAuthError}/>
  		)
  }

const mapStateToProps = (state) => {
   return { isAuth: Selectors.getIsAuth(state),
            hasAuthError: state.auth.hasAuthError,  
   }
  }

  export default compose(
    connect(mapStateToProps, {postLogin}),
)(LoginContainer)

