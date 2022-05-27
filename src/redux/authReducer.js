<<<<<<< HEAD
import { reset } from 'redux-form';
import {authAPI} from '../API/API.js';

const SET_AUTH_DATA='SET_AUTH_DATA';
const SET_HAS_AUTH_ERROR='SET_HAS_AUTH_ERROR'
=======
import {authAPI} from './../API/API.js';


const SET_AUTH_DATA='SET_AUTH_DATA';
>>>>>>> 2c1173b9aa6a4ae08dd3abfc90e2e8fb577702e0

const initialState={
	id:null,
	email:null,
	login: null,		
	isAuth:false,
<<<<<<< HEAD
	hasAuthError:null,
=======
>>>>>>> 2c1173b9aa6a4ae08dd3abfc90e2e8fb577702e0
}

const authReducer=(state=initialState, action)=>{
	
	switch(action.type) {

		case SET_AUTH_DATA:
<<<<<<< HEAD
			return {...state, ...action.payload, hasAuthError:null}

		case SET_HAS_AUTH_ERROR:
			return {...state, hasAuthError:action.errorMessage}
=======
			return {...state, ...action.payload}
>>>>>>> 2c1173b9aa6a4ae08dd3abfc90e2e8fb577702e0
				
		default:return state
	}
}

export const setAuthData = (id,email,login,isAuth)=>({type:SET_AUTH_DATA, payload:{id,email,login,isAuth}})

<<<<<<< HEAD
		const setHasAuthError = (errorMessage)=>({type:SET_HAS_AUTH_ERROR, errorMessage})

export const getAuthData = ()=>async (dispatch)=>{	
	 //dispatch(setToggleIsFetching(true))
	const response= await  authAPI.getAuthData();	
	if(response.data.resultCode===0)	{
		 let {id,email,login} = response.data.data;		 
		 dispatch(setAuthData(id,email,login,true))		
		 //dispatch(setToggleIsFetching(false))
		} 
=======

export const getAuthData = ()=>async (dispatch)=>{
	
	
	 //dispatch(setToggleIsFetching(true))
	const response= await  authAPI.getAuthData();
	
	if(response.data.resultCode===0)	{
		 let {id,email,login} = response.data.data;
		 
		 dispatch(setAuthData(id,email,login,true))
		 //dispatch(setToggleIsFetching(false))
		}
>>>>>>> 2c1173b9aa6a4ae08dd3abfc90e2e8fb577702e0
   	 
 }

export const postLogin = (formData)=>async (dispatch)=>{
	
		const {email,password,rememberMe}=formData
	 	const response= await  authAPI.postLogin(email,password,rememberMe); 
	 	if(response.data.resultCode===0){
	 		dispatch(getAuthData())
<<<<<<< HEAD
	 		} else {
		dispatch(setHasAuthError(response.data.messages[0]))
		}	 
=======
	 		}	 
>>>>>>> 2c1173b9aa6a4ae08dd3abfc90e2e8fb577702e0
	 	}

 export const unLogin = ()=>async (dispatch)=>{
	
			 	const response= await  authAPI.deleteLogin();
			 	 console.log('response.data.resultCode',response.data.resultCode)
			 	if(response.data.resultCode===0){
	 		dispatch(setAuthData(null,null,null,false))
	 		}	 
	 	}	 


export default authReducer;