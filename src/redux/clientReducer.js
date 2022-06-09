import {clientsAPI} from './../API/API.js';

const SET_CLIENTS='SET_CLIENTS';
const SET_TOGGLE_IS_FETCHING_CLIENTS='SET_TOGGLE_IS_FETCHING_CLIENTS';
const SET_TOTAL_PAGE_COUNT='SET_TOTAL_PAGE_COUNT';

const   initialState={
		toggleIsFetchingClients:false,
		totalCount:0,
		pageSize: 10,
		currentPage:1,
		clients:[],
		}

const clientReducer=(state=initialState, action)=>{
	
	switch(action.type) {

		case SET_CLIENTS:
			return {...state, clients:[...action.clients]}
		case SET_TOGGLE_IS_FETCHING_CLIENTS:
			return {...state, toggleIsFetchingClients:action.toggleIsFetchingClients}
		case SET_TOTAL_PAGE_COUNT:
			return {...state, totalCount:action.totalCount}
		
		default:return state
	}
}

export const setClient = (clients)=>({type:SET_CLIENTS, clients })
export const setToggleIsFetchingClients = (toggleIsFetchingClients)=>({type:SET_TOGGLE_IS_FETCHING_CLIENTS, toggleIsFetchingClients })
export const setTotalPageCount = (totalCount)=>({type:SET_TOTAL_PAGE_COUNT, totalCount })
export const getClients = (currentPage,pageSize=10)=>async (dispatch)=>{	
	 dispatch(setToggleIsFetchingClients(true))
	 const response= await  clientsAPI.getClients(currentPage,pageSize);	
	 let clients = response.data.items;
	 dispatch(setClient(clients))
   	 dispatch(setTotalPageCount(response.data.totalCount))
   	 dispatch(setToggleIsFetchingClients(false))
 }

export default clientReducer;