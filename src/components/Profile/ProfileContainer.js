import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { connect} from 'react-redux';
import { compose } from 'redux';
import Profile from './Profile.js';
import {getClientProfile, getStatus, putStatus,putProfile} from '../../redux/ProfileReducer.js';
import Preloader from '../Preloader/Preloader.js';



const ProfileContainer = (props)=>{
const params = useParams()
const clientId=params.userId

const [editMode, setEditMode]=useState(false)

useEffect(()=>{props.getClientProfile(clientId)},[props.toUpdateProfile,clientId]) 
useEffect(()=>{props.getStatus(clientId)},[props.status]) 

const onSubmit = (formData) => {
	props.putProfile(formData)
	setEditMode (false)
		}


if(props.toggleIsFetching) 
	return (<Preloader />)
	return (
		<Profile {...props}
			clientId={clientId}
			onSubmit={onSubmit}
			editMode={editMode}
			setEditMode={setEditMode}
			
		/>			
		)
}

const mapStateToProps = (state) => {
  return { 
  		   dataClientProfile:state.profile.dataClientProfile,
  		   toggleIsFetching:state.profile.toggleIsFetching,
  		   status:state.profile.status,
  		   myId:state.auth.id,
		   toUpdateProfile:state.profile.toUpdateProfile,           
   };
  }; 

  export default compose(
    connect(mapStateToProps, {getClientProfile,getStatus,putStatus,putProfile}),
   
)(ProfileContainer)


