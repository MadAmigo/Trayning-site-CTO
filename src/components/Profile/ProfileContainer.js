import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { connect} from 'react-redux';
import { compose } from 'redux';
import Profile from './Profile.js';
import {getClientProfile, getStatus, putStatus,putProfile,updataPhoto} from '../../redux/ProfileReducer.js';
import Preloader from '../../Common/Preloader/Preloader.js'
import ProfilePhoto from './ProfilePhoto.js'
import StatusRef from './ProfileInputFields/StatusRef.js'


const ProfileContainer = (props)=>{
	const profileStatus=( !!props.status)?props.status:'status yok'	// for component <StatusRef>
	const params = useParams()
	const clientId=params.userId
	const isOwner=(clientId===props.myId)?true:false;
	const [editMode, setEditMode]=useState(false)
	const {toUpdateProfile,status}={...props}
	useEffect(()=>{props.getClientProfile(clientId)},[toUpdateProfile,clientId]) 
	useEffect(()=>{props.getStatus(clientId)},[status]) 

	const onSubmit = (formData) => {
		props.putProfile(formData)
		setEditMode (false)
			}

if(props.toggleIsFetching) 
	return (<Preloader />)
	return (

			<>	{!!props.dataClientProfile && <ProfilePhoto photo={props.dataClientProfile.photos.large}
									 isOwner={isOwner} 
									 updataPhoto={props.updataPhoto}
									 />}
{/*realization through useRef*/}		{!editMode && <StatusRef 
										profileStatus={profileStatus}
										isOwner={isOwner}
										putStatus={props.putStatus}
										  />}	

{/*realization through useState*/}	{/*{!editMode && <Status 
										status={status}
										isOwner={isOwner}
										putStatus={props.putStatus}
										  />}	}		*/}						  										 
						 
													
									<Profile {...props}
										isOwner={isOwner}
										clientId={clientId}
										onSubmit={onSubmit}
										editMode={editMode}
										setEditMode={setEditMode}
										updataPhoto={props.updataPhoto}
									/>	
			</>			
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
    connect(mapStateToProps, {getClientProfile,getStatus,putStatus,putProfile,updataPhoto}),
	)(ProfileContainer)


