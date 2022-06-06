import React, { useState,  useEffect } from 'react'
import  s from '../profile.module.css'

const Status =(props)=>{   
  //  try to do using redux-form with initial Values as beginning status
const [status,setStatus]=useState(props.status||'status yok')
useEffect(()=>{setStatus(props.status||'status yok')},[props.status]) // for updata input field
				
const onChangeHandler=(e)=>{setStatus(e.target.value)}
const setChangedStatus = () =>{		
if(props.isOwner){
	props.putStatus(status)	
	} else {
	setStatus(props.status||'status yok')}
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
export default Status;