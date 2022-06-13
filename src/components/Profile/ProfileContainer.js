import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { connect} from 'react-redux';
import { compose } from 'redux';
import Profile from './ProfileInputFields/Profile.js';
import {getClientProfile, getStatus, putStatus,putProfile,updataPhoto} from '../../redux/ProfileReducer.js';
import Preloader from '../../Common/Preloader/Preloader.js'
import ProfilePhoto from './ProfilePhoto/ProfilePhoto.js'
import StatusRef from './Status/StatusRef.js'
import {withAuthRedirect} from '../../Common/withAuthRedirect.js'

import {Selectors} from '../../redux/selectors.js'


const ProfileContainer = (props)=>{

	const profileStatus=( !!props.status)?props.status:'status yok'	// for component <StatusRef>
	const params = useParams()
	const clientId=params.userId
	const isOwner=(clientId===String(props.myId))?true:false;

	const [editMode, setEditMode]=useState(false)
	const {toUpdateProfile,status}={...props}
	useEffect(()=>{props.getClientProfile(clientId)},[toUpdateProfile,clientId]) 
	useEffect(()=>{props.getStatus(clientId)},[status]) 

	const onSubmit = (formData) => {
		props.putProfile(formData)
		setEditMode (false)
			}

if(props.toggleIsFetchingProfile) 
	return (<Preloader />)
	return (

			<>	{!!props.dataClientProfile && <ProfilePhoto photo={props.dataClientProfile.photos.large}
									 isOwner={isOwner} 
									 updataPhoto={props.updataPhoto}
									 	clientId={clientId}
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
  return { 	dataClientProfile:Selectors.getDataClientProfile(state),      
  			toggleIsFetchingProfile:Selectors.getToggleIsFetchingProfile(state),
  			status:Selectors.getStatus(state),
  			myId:Selectors.getMyId(state),
  			toUpdateProfile:Selectors.getToUpdateProfile(state),
  			isAuth:	Selectors.getIsAuth(state)      
   }
  } 

  export default compose(
    connect(mapStateToProps, {getClientProfile,getStatus,putStatus,putProfile,updataPhoto}),
    //withAuthRedirect
	)(ProfileContainer)


