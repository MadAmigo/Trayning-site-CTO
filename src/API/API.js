import * as axios from 'axios'
const instance = axios.create({
	withCredentials: true,
	baseURL:'https://social-network.samuraijs.com/api/1.0/',
	headers:{
		'API-KEY':'07fb671a-090d-47a4-962a-983054d8a5d8'
			},   
})
export const clientsAPI={			
			getClients(currentPage,pageSize=10){			
			return instance.get(`users?page=${currentPage}&count=${pageSize}`)},
}	 	
export const authAPI={
			getAuthData(){return instance.get(`/auth/me`)},
				
			postLogin(email,password,rememberMe){return instance
				.post(`auth/login`,{email,password,rememberMe})},
				
			deleteLogin(){return instance.delete(`auth/login`)},           
}
export const profileAPI={
	 getProfileData(clientId){
	 	return instance.get(`profile/${clientId}`)},
	 putStatus(currentStatus){	 	
	 	return instance.put(`/profile/status`,{status:currentStatus})},
	 getStatus(userId){
		return instance.get(`profile/status/${userId}`)},
	 putProfile(formData){
		 return instance.put(`profile`,formData)},
	 updataPhoto(file){
	 	
	 	 const formData = new FormData()   // create formdada with added photofile	 	
   		 formData.append("image", file)       //'image' takes from API documentation
   //headers: { "Content-Type": "multipart/form-data" } sets type for file in request
		 return instance.put(`profile/photo`, formData,{ 
		 	headers:{ "Content-Type": "multipart/form-data" }
		 })
		},
	
}	 	
