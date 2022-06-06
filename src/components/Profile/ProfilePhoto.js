import React, {memo} from 'react'
import  s from './profile.module.css'
import UpdataPhotoInput from './ProfileInputFields/UpdataPhotoInput.js'
import commonСlientPhoto from '../../images/kisspng-computer-icons-user-profile-synonyms-and-antonyms-5b013f458c5d78.223528981526808389575.png'

const ProfilePhoto =memo((props) =>{
//const sendSelectedPhoto=(event)=>{props.updataPhoto(event.target.files[0])} // version without component
		return(

	<div >
			<div className={s.profilePhoto}>
			
				{!!(props.photo)?     // may be an option <img src={props.photo.large || commonСlientPhoto} alt=''/>
				<img src={props.photo} alt=''/>
				:<img src={commonСlientPhoto} alt='' />
				}
			</div >
			{props.isOwner &&<UpdataPhotoInput {...props}/>}
			{/*{isOwner &&<input type="file" onChange={sendSelectedPhoto}/>}   // version without component*/}
	</div >
	)
}
)
export default ProfilePhoto