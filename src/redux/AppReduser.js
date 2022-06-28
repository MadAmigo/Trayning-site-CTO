import {authAPI} from '../API/API.js';
const SET_IS_INITIAL='SET_IS_INITIAL';

const initialState={			
	isInitial:false,
	}

const AppReduser=(state=initialState, action)=>{
	
	switch(action.type) {

		case SET_IS_INITIAL:
			return {...state, isInitial:true}

		default:return state
	}
}

export const setIsInitial = ()=>({type:SET_IS_INITIAL }) 

export const checkInishial = ()=>async (dispatch)=>{
	const response= await  authAPI.getAuthData()	 
	 // promise=dispatch(any())                 зависимость от нескольких запросов,
	 // promise=dispatch(any())                 реализованная через промисы
	 //  Promise.all([promise]).then(()=>dispatch(setIsInitial()))
	 // in authAPI.getAuthData() to insert  return --> to get back promise
	 //if(response.data.fieldsErrors.length===0)   заблокированная инициализация
	 	dispatch(setIsInitial()) 	 	
	 	 }

 export default AppReduser;