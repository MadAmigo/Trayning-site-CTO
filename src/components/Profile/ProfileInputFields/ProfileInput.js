import React  from 'react'
import  s from '../profile.module.css'
import {InputFormModel, TextAreaFormModel} from '../../../Common/Form FieldModels.js'
import {Field, reduxForm} from 'redux-form'

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
export default ProfileInput;