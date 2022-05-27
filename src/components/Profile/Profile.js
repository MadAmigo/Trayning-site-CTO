<<<<<<< HEAD
import React, { useState, useRef, useEffect } from 'react';
import  s from './profile.module.css';
import commonСlientPhoto from '../../images/kisspng-computer-icons-user-profile-synonyms-and-antonyms-5b013f458c5d78.223528981526808389575.png';
import {InputFormModel, TextAreaFormModel} from '../../Common/Form FieldModels.js';
import {Field, reduxForm, reset } from 'redux-form';
import Preloader from '../Preloader/Preloader.js';

const Profile =(props) =>{
const isOwner=(props.clientId==props.myId)?true:false;

	if(!props.dataClientProfile) return (<Preloader />)
		return(
<div className={s.profile}>		

			<div className={s.profilePhoto}>
				{!!(props.dataClientProfile.photos.large)?
				<img src={props.dataClientProfile.photos.large} alt=''/>
				:<img src={commonСlientPhoto} alt='' />
				}
			</div>
			{isOwner&&<button className={s.profilePhoto_button} >Change photo</button>}

		 	{!props.editMode&&<Status {...props} isOwner={isOwner} />}

		{!props.editMode&&
		<>
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

			{isOwner&&<button onClick={()=>props.setEditMode(true)}className={s.profilePhoto_button}>Change profile</button>}
	</>}

			{props.editMode&&<ProfileInput {...props} initialValues={props.dataClientProfile}/>}


=======
import React from 'react';
import  s from './profile.module.css';

const Profile =() =>{
	return(
<div className={s.profile}>
      Profile
		
>>>>>>> 2c1173b9aa6a4ae08dd3abfc90e2e8fb577702e0
</div>

	)
}
<<<<<<< HEAD



const Status =(props)=>{   
  //  try to do using redux-form with initial Values as beginning status
	
const [status,setStatus]=useState(props.status||'status yok')

useEffect(()=>{setStatus(props.status||'status yok')},[props.status]) //для записи в поле ввода измененного статуса

				
const onChangeHandler=(e)=>{setStatus(e.target.value)}

const setChangedStatus = () =>{		
if(props.isOwner){
	props.putStatus(status)	
	}
	else {setStatus(props.status||'status yok')}
}
    return (
    <div className={s.statusInputForm}>
     <label>
     	Status 
     </label> 
	 <div>		    
		<input
	    type='text'       
		value={status}
		onBlur={setChangedStatus}
		onChange={onChangeHandler}
		/>
	 </div>      
     </div>
    )
  };

const ProfileInputFields =(props) => {

	return(
 <form onSubmit={props.handleSubmit} className={s.profileInputForm}>

 		 <div className={s.field}>
        	<Field
        name="aboutMe"
        type="text"
        component={InputFormModel}
        label="AboutMe"
        
      />
        </div>


 		 <div className={s.field}>
        	<Field
        name="fullName"
        type="text"
        component={InputFormModel}
        label="FullName"
        
      />
        </div>



        <div className={s.field}>
        	<Field
		        name="lookingForAJob"
		        type="checkbox"
		        component={InputFormModel}
		        label="lookingForAJob"
        
    	    />
        </div>

		
        <div className={s.field_LookingForAJobDescription}>
        	<Field
		        name="lookingForAJobDescription"
		        type="text"
		        component={TextAreaFormModel}
		        label="LookingForAJobDescription"      
     		/>
        	
        </div>

        <div className={s.contacts}>
			contacts:
			{Object.keys(props.dataClientProfile.contacts).map(key=>
				<div key={key} className={s.contacts_item}>

					
        	<Field
        name={'contacts.' + key}
        type="text"
        component={InputFormModel}
        label={key}
        
      />

				


				 </div>)}
			</div>

      

        <div className={s.field}>
        	<button  type='submit' 
        	
        	className={s.profilePhoto_button} >Set new profile</button>  	
        </div>

       </form>
	)
}

const ProfileInput = reduxForm({form:'profileInput', enableReinitialize: true})(ProfileInputFields);

=======
>>>>>>> 2c1173b9aa6a4ae08dd3abfc90e2e8fb577702e0
export default Profile;