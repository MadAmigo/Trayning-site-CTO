import React, { useState } from 'react'
import s from './clients.module.css'
import pingvin from './../../images/kisspng-computer-icons-user-profile-synonyms-and-antonyms-5b013f458c5d78.223528981526808389575.png'
import {NavLink} from 'react-router-dom'
import Paginator from '../../Common/Paginator.js'
import SerchField from './SerchField.js'


const Clients =(props) =>{

const [updataPage, setUpdataPage]=useState('')
const [checkedFullname, setCheckedFullname]=useState(true) // switch  visible input field Name
const [checkedLookingForAJob, setCheckedLookingForAJob]=useState(false) // switch  visible input field LookingForAJob

const FilteredClientsNames=(query) =>entrancedArray.filter((el)=> el.name.toString().toLowerCase().indexOf(query.toLowerCase())>-1)
const FilteredStatus=() =>entrancedArray.filter((el)=> (!!el.status))
const deepCopy = (arrayForDeepCopy) => JSON.parse(JSON.stringify(arrayForDeepCopy))  //deep copy array

let arrayClientsForMap= deepCopy(props.clients)  
let entrancedArray = deepCopy(props.clients)

	if( updataPage.length>1 && !!checkedFullname) {
		arrayClientsForMap=deepCopy(FilteredClientsNames(updataPage)) //deep copy array after filter
		entrancedArray=deepCopy(arrayClientsForMap) //deep copy for next filterFunction
		}

	if(!!checkedLookingForAJob) {
		arrayClientsForMap=FilteredStatus()
	}
 	
	return(

<div className={s.clients}>

	<div className={s.serch}>
	    <p>Клієнти</p>
		<span className={s.serchField}>
					<SerchField     checkedFullname={checkedFullname}
									setCheckedFullname={setCheckedFullname}
									checkedLookingForAJob={checkedLookingForAJob}
									setCheckedLookingForAJob={setCheckedLookingForAJob}
									setUpdataPage={setUpdataPage}
				 />
		</span>
	</div> 

	<Paginator totalCount={props.totalCount}
				getClients={props.getClients}
				/>

    	{arrayClientsForMap.map(client=>			    	
    	   <div className={s.client} key={client.id}>

		    	   <NavLink  to={`/profile/${client.id}`}>

				    	<div className={s.clientPhotos}>
				    			{!!client.photos.large?<img src={client.photos.large} alt='' />:<img src={pingvin} alt=''/>}
						</div>

						<div className={s.clientStatus}>
				    			status={!!client.status?client.status:'null'}
						</div>

				    		<div className={s.clientName}>
				    			name={client.name}
						</div>

						<div className={s.clientId}>
				    			ID={client.id}
						</div>
				</NavLink>
    	</div>
    	)}
</div>
	)
}
export default Clients;