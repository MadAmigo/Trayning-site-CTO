import {authAPI} from '../API/API.js';

const SET_AUTH_DATA='SET_AUTH_DATA';
const SET_HAS_AUTH_ERROR='SET_HAS_AUTH_ERROR'

const initialState={
	id:null,
	email:null,
	login: null,		
	isAuth:false,
	hasAuthError:null,
	}

const authReducer=(state=initialState, action)=>{
	
	switch(action.type) {

		case SET_AUTH_DATA:
			return {...state, ...action.payload, hasAuthError:null}

		case SET_HAS_AUTH_ERROR:
			return {...state, hasAuthError:action.errorMessage}
				
		default:return state
	}
}

export const setAuthData = (id,email,login,isAuth)=>({type:SET_AUTH_DATA, payload:{id,email,login,isAuth}})

	   const setHasAuthError = (errorMessage)=>({type:SET_HAS_AUTH_ERROR, errorMessage})

export const getAuthData = ()=>async (dispatch)=>{	
			const response= await  authAPI.getAuthData();	
			if(response.data.resultCode===0)	{
			let {id,email,login} = response.data.data;		 
			dispatch(setAuthData(id,email,login,true))		
			} 
 		}

export const postLogin = (formData)=>async (dispatch)=>{
	
				const {email,password,rememberMe}=formData
				const response= await  authAPI.postLogin(email,password,rememberMe); 
				if(response.data.resultCode===0){
				dispatch(getAuthData())
				} else {
				dispatch(setHasAuthError(response.data.messages[0]))
				}	 
	 	}

 export const unLogin = ()=>async (dispatch)=>{
				
				const response= await  authAPI.deleteLogin();			 	 
				if(response.data.resultCode===0){
				dispatch(setAuthData(null,null,null,false))
				}	 
	 	}	 

export default authReducer;