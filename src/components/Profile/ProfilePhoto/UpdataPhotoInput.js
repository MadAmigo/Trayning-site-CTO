import React, {useState} from 'react'
import  s from '../profile.module.css'

const UpdataPhotoInput=(props)=>{
    const [selectedPhoto, setSelectedPhoto]=useState(' ')
    	
    const sendSelectedPhoto=(event)=>{  //!!!!!! argument of function necessarily is (event)
          event.preventDefault()
          props.updataPhoto(selectedPhoto)
        }

    const onChangeHandlSubmitPhoto = (event) => {
        if (event.target.files[0]) {setSelectedPhoto(event.target.files[0]) }  
   }

	 return (
    <div className={s.updataPhotoInput_button}>
        <input        
          type="file"
          onChange={onChangeHandlSubmitPhoto}
        />
        <button  onClick={sendSelectedPhoto}>
           <span>Сохранить и закрыть</span> 
        </button>
    </div>
  )
}
export default UpdataPhotoInput

