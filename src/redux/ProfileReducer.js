import {profileAPI} from '../API/API.js'
import store from './store.js'


const SET_CLIENT_PROFILE_DATA='SET_CLIENT_PROFILE_DATA'
const SET_TOGGLE_IS_FETCHING='SET_TOGGLE_IS_FETCHING'
const SET_STATUS='SET_STATUS'
const SET_TOUPDATEPROFILE='SET_TOUPDATEPROFILE'

const initialState={
	dataClientProfile:null,
	toggleIsFetching:true,
	status:null,
	toUpdateProfile:0,
}

const profileReducer=(state=initialState, action)=>{
	
	switch(action.type) {

		case SET_TOGGLE_IS_FETCHING:
			return {...state, toggleIsFetching:action.isFetching}

		case SET_CLIENT_PROFILE_DATA:
			return {...state, dataClientProfile:action.dataClientProfile}	

		case SET_STATUS:
			//console.log('action.status',action.status)
			return {...state, status:action.status}	

		case SET_TOUPDATEPROFILE:
			return {...state, toUpdateProfile:state.toUpdateProfile+1}	
	

				
		default:return state
	}
}

export const setClientProfile = (dataClientProfile)=>({type:SET_CLIENT_PROFILE_DATA, dataClientProfile})
export const setToggleIsFetching = (isFetching)=>({type:SET_TOGGLE_IS_FETCHING, isFetching})
export const setStatus = (status)=>({type:SET_STATUS, status})
export const setToUpdateProfile =() => ({type:SET_TOUPDATEPROFILE})

export const getClientProfile = (clientId)=>async (dispatch)=>{	
	 dispatch(setToggleIsFetching(true))
	const response= await  profileAPI.getProfileData(clientId);	

	if(response.status===200)	{
		 let dataClientProfile = response.data;	
		 
		 dispatch(getStatus(clientId))
		 dispatch(setClientProfile(dataClientProfile))			 
		 dispatch(setToggleIsFetching(false))
			}  	 
    }

export const getStatus = (clientId)=>async (dispatch)=>{	
		
 	 	const response= await  profileAPI.getStatus(clientId); 
 	 	
 	 	
 	 	dispatch(setStatus(response.data))	

 	}


 export const putStatus = (currentStatus)=>async (dispatch)=>{	
 	
 	 	const response= await  profileAPI.putStatus(currentStatus); 
 	 		
 	 		if (response.data.resultCode===0){
 	 			
 	 			
 	 			dispatch(setStatus(currentStatus))
 	 		}
 	}	

 	export const putProfile = (formData)=>async (dispatch)=>{	
 	
 	 	const response= await  profileAPI.putProfile(formData); 
 	 		if (response.data.resultCode===0){
 	 	dispatch(setToUpdateProfile())   //вариант с переключателем ,a можно задиспачить обновление профиля через getState().auth.id
 	 	}
 	}
 	
 	

export default profileReducer;