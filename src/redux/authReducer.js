import {authAPI} from './../API/API.js';


const SET_AUTH_DATA='SET_AUTH_DATA';

const initialState={
	id:null,
	email:null,
	login: null,		
	isAuth:false,
}

const authReducer=(state=initialState, action)=>{
	
	switch(action.type) {

		case SET_AUTH_DATA:
			return {...state, ...action.payload}
				
		default:return state
	}
}

export const setAuthData = (id,email,login,isAuth)=>({type:SET_AUTH_DATA, payload:{id,email,login,isAuth}})


export const getAuthData = ()=>async (dispatch)=>{
	
	
	 //dispatch(setToggleIsFetching(true))
	const response= await  authAPI.getAuthData();
	
	if(response.data.resultCode===0)	{
		 let {id,email,login} = response.data.data;
		 
		 dispatch(setAuthData(id,email,login,true))
		 //dispatch(setToggleIsFetching(false))
		}
   	 
 }

export const postLogin = (formData)=>async (dispatch)=>{
	
		const {email,password,rememberMe}=formData
	 	const response= await  authAPI.postLogin(email,password,rememberMe); 
	 	if(response.data.resultCode===0){
	 		dispatch(getAuthData())
	 		}	 
	 	}

 export const unLogin = ()=>async (dispatch)=>{
	
			 	const response= await  authAPI.deleteLogin();
			 	 console.log('response.data.resultCode',response.data.resultCode)
			 	if(response.data.resultCode===0){
	 		dispatch(setAuthData(null,null,null,false))
	 		}	 
	 	}	 


export default authReducer;