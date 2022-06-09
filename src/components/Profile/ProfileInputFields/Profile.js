import React, { memo } from 'react'
import  s from '../profile.module.css'
import Preloader from '../../../Common/Preloader/Preloader.js'
import ProfileInput from './ProfileInput.js'

const Profile = memo((props) =>{
//const sendSelectedPhoto=(event)=>{props.updataPhoto(event.target.files[0])} // version without component
	if(!props.dataClientProfile) return (<Preloader />)
		return(
		<div >	
			{!props.editMode&&
				<div className={s.profile}>
						<div className={s.fullName}>
							fullName:      <span> {props.dataClientProfile.fullName}</span>
						</div>

						<div className={s.fullName}>
							lookingForAJob: {props.dataClientProfile.lookingForAJob?
							<input type="checkbox" onChange={()=>{}} checked="checked" />
							:<input type="button"  className={s.button} />}
			     
						</div>

						<div className={s.fullName}>
							lookingForAJobDescription: <div className={s.lookingForAJobDescription} >
							{String(props.dataClientProfile.lookingForAJobDescription)}
							</div>
						</div>

						<div className={s.contacts}>
						  contacts:
							{Object.keys(props.dataClientProfile.contacts).map(key=>
								<div key={key} className={s.contacts_item}>{key}: {String(props.dataClientProfile.contacts[key])} </div>)}
						</div>

						{props.isOwner&&<button onClick={()=>props.setEditMode(true)}className={s.profilePhoto_button}>Change profile</button>}
				</div>}

			{props.editMode&&<ProfileInput {...props} initialValues={props.dataClientProfile}/>}
	</div>
	)
}
)
export default Profile;