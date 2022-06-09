import React, { useRef, useEffect, memo } from 'react'
import  s from '../profile.module.css'

const StatusRef =memo((props)=>{   
  //  try to do using redux-form with initial Values on start component	
const statusRef=useRef(props.profileStatus)
  useEffect(() => {
  	statusRef.current.value=props.profileStatus  }, [props.profileStatus]);

const setChangedStatus = () =>{		
if(props.isOwner){
	props.putStatus(statusRef.current.value)
	}
	else {statusRef.current.value=props.profileStatus}
	}

    return (
    <div className={s.statusInputForm}>
	     <label>
	     	Status 
	     </label> 
		 <div>		    
			<input
			defaultValue={props.profileStatus}
			ref={statusRef}
		    type='text'       			
			onBlur={setChangedStatus}
			/>
		 </div>       
     </div>
    )
  }
  )
export default StatusRef;