import React from 'react';
import  s from './Login.module.css';
<<<<<<< HEAD
import {Field, reduxForm, reset } from 'redux-form';
import {Navigate} from 'react-router-dom';
import {email} from '../../Common/Validators.js';
import {aol} from '../../Common/Validators.js';
import {minLength} from '../../Common/Validators.js';
import {maxLength} from '../../Common/Validators.js';
import {required} from '../../Common/Validators.js';
import {password} from '../../Common/Validators.js';
import {InputFormModel} from '../../Common/Form FieldModels.js';


const minLength6=minLength(6);
const maxLength20=maxLength(20)
=======
import {Field, reduxForm} from 'redux-form';
import {Navigate} from 'react-router-dom';
>>>>>>> 2c1173b9aa6a4ae08dd3abfc90e2e8fb577702e0

const Login = (props)=> {

	if(props.isAuth){return <Navigate to="/main" replace />}
	return(
	   <div className={s.login_wrapper}>
		<p>Login</p>
<<<<<<< HEAD
		<LoginForm onSubmit={props.onSubmit} hasAuthError={props.hasAuthError} />
=======
		<LoginForm onSubmit={props.onSubmit} />
>>>>>>> 2c1173b9aa6a4ae08dd3abfc90e2e8fb577702e0
	   </div>
	)

}

const LoginFields =(props) =>{
	return(
      <form onSubmit={props.handleSubmit} className={s.loginForm}>
        <div className={s.field}>
<<<<<<< HEAD
        	<Field
        name="email"
        type="email"
        component={InputFormModel}
        label="Email"
        validate={email}
        warn={aol}
      />
        </div>
		
        <div className={s.field}>
        	<Field
        name="password"
        type="password"
        component={InputFormModel}
        label="password"
       
        
      />
        	
=======
        	<Field  name='email' type='text' component='input' />
        </div>
		
        <div className={s.field}>
        	<Field  name='password' type='password' component='input' />
>>>>>>> 2c1173b9aa6a4ae08dd3abfc90e2e8fb577702e0
        </div>

        <div className={s.field}>
        	<Field  name='rememberMe' type='checkbox' component='input' />   remember Me
        </div>

<<<<<<< HEAD
        {props.hasAuthError&&<div className={s.error}>{props.hasAuthError}</div>}

        <div className={s.field}>
        	<button  type='submit' disabled={props.submitting}>submit</button>
        	<button type="button" disabled={props.pristine || props.submitting} onClick={props.reset}>
          Clear 
        </button>
=======
        <div className={s.field}>
        	<button  type='submit'>submit</button>
>>>>>>> 2c1173b9aa6a4ae08dd3abfc90e2e8fb577702e0
        </div>
       </form>
	)
    }

const LoginForm = reduxForm({form:'login'})(LoginFields);
export default  Login;