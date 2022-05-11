import React from 'react';
import  s from './Login.module.css';
import {Field, reduxForm} from 'redux-form';
import {Navigate} from 'react-router-dom';

const Login = (props)=> {

	if(props.isAuth){return <Navigate to="/main" replace />}
	return(
	   <div className={s.login_wrapper}>
		<p>Login</p>
		<LoginForm onSubmit={props.onSubmit} />
	   </div>
	)

}

const LoginFields =(props) =>{
	return(
      <form onSubmit={props.handleSubmit} className={s.loginForm}>
        <div className={s.field}>
        	<Field  name='email' type='text' component='input' />
        </div>
		
        <div className={s.field}>
        	<Field  name='password' type='password' component='input' />
        </div>

        <div className={s.field}>
        	<Field  name='rememberMe' type='checkbox' component='input' />   remember Me
        </div>

        <div className={s.field}>
        	<button  type='submit'>submit</button>
        </div>
       </form>
	)
    }

const LoginForm = reduxForm({form:'login'})(LoginFields);
export default  Login;