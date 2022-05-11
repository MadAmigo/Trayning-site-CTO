import React from 'react';
import * as axios from 'axios';


const instance = axios.create({
	withCredentials: true,
	baseURL:'https://social-network.samuraijs.com/api/1.0/',
	headers:{
		'API-KEY':'07fb671a-090d-47a4-962a-983054d8a5d8'
			},
})

export const clientsAPI={

	 getClients(currentPage=3,pageSize=10){
	 	return instance.get(`users?page=${currentPage}&count=${pageSize}`)},
}	 	
export const authAPI={
	 getAuthData(){return instance.get(`/auth/me`)},

	 postLogin(email,password,rememberMe){return instance
	            .post(`auth/login`,{email,password,rememberMe})},

	  deleteLogin(){return instance.delete(`auth/login`)},           

}



