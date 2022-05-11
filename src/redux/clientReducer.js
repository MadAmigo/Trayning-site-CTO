import {clientsAPI} from './../API/API.js';


const SET_CLIENTS='SET_CLIENTS';
const SET_TOGGLE_IS_FETCHING='SET_TOGGLE_IS_FETCHING';
const SET_TOTAL_PAGE_COUNT='SET_TOTAL_PAGE_COUNT';
//const SET_CURRENT_PAGE='SET_CURRENT_PAGE';

//const ADD_NEW_CLIENT='ADD_NEW_CLIENT';

const initialState={
	toggleIsFetching:false,
	totalCount:0,
	pageSize: 10,
	currentPage:1,
	clients:[],
}

const clientReducer=(state=initialState, action)=>{
	//console.log('clients',action.clients)


	switch(action.type) {

		case SET_CLIENTS:
			return {...state, clients:[...action.clients]}
		case SET_TOGGLE_IS_FETCHING:
			return {...state, toggleIsFetching:action.toggleIsFetching}
		case SET_TOTAL_PAGE_COUNT:
			return {...state, totalCount:action.totalCount}
		//case SET_CURRENT_PAGE:
			//return {...state, currentPage:action.currentPage}
	

		
		
		default:return state
	}
}

//export const setCurrentPage = (newPage)=>({type:SET_CURRENT_PAGE, newPage })
export const setClient = (clients)=>({type:SET_CLIENTS, clients })
export const setToggleIsFetching = (toggleIsFetching)=>({type:SET_TOGGLE_IS_FETCHING, toggleIsFetching })
export const setTotalPageCount = (totalCount)=>({type:SET_TOTAL_PAGE_COUNT, totalCount })


//export const addNewClient = (newClient)=>({type:ADD_NEW_CLIENT,newClient })


//export const API.postNewClientThunc = (newClient)=> async (dispatch)=>{
//	let response = await API.clientPost()
//}
//export const changePage = (newPage)=>(dispatch)=>{dispatch(setCurrentPage(newPage))}

export const getClients = (currentPage,pageSize)=>async (dispatch)=>{
	
	
	 dispatch(setToggleIsFetching(true))
	const response= await  clientsAPI.getClients(currentPage,pageSize);	
	 let clients = response.data.items;
	 dispatch(setClient(clients))
	 dispatch(setToggleIsFetching(false))
   	 dispatch(setTotalPageCount(response.data.totalCount))

 }


export default clientReducer;