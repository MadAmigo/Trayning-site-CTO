import React, { useState } from 'react';
import s from './clients.module.css';
import pingvin from './../../images/kisspng-computer-icons-user-profile-synonyms-and-antonyms-5b013f458c5d78.223528981526808389575.png'
<<<<<<< HEAD
import {NavLink} from 'react-router-dom';


=======
>>>>>>> 2c1173b9aa6a4ae08dd3abfc90e2e8fb577702e0

const Clients =(props) =>{

const [currentPortion,setCurrentPortion]=useState(0)
const pageForMap=props.pageCount[currentPortion]
	 
	const changeCurrentPortionForward=(currentPortion)=>{
	setCurrentPortion(currentPortion-1)
	props.setCurrentPage((currentPortion-1)*props.pageSize+1)
}
	
	const changeCurrentPortionBack=(currentPortion)=>{
	setCurrentPortion(currentPortion+1)
	props.setCurrentPage((currentPortion+1)*props.pageSize+1)
}

	return(
<<<<<<< HEAD

<div className={s.clients}>

=======
<div className={s.clients}>
>>>>>>> 2c1173b9aa6a4ae08dd3abfc90e2e8fb577702e0
	<p>Клієнти</p>
	
	<div className={s.paging}>
	  
	{(currentPortion >0)&&<button onClick={()=>changeCurrentPortionForward(currentPortion)}>назад</button>}
           {pageForMap.map((p,index)=>
	           	<div key={index} className={(p===props.currentPage)?(`${s.numberPage} ${s.active}`):s.numberPage} onClick={()=>props.setCurrentPage(p)}>
		 	{p}
		 	</div>
	 	)}
	   	{(currentPortion<props.pageCount.length-1)&&<button onClick={()=>changeCurrentPortionBack(currentPortion)}>вперед</button>}
       </div>

    	{props.clients.map(client=>			    	
    	   <div className={s.client} key={client.id}>

<<<<<<< HEAD
    	   <NavLink  to={`/profile/${client.id}`}>

=======
>>>>>>> 2c1173b9aa6a4ae08dd3abfc90e2e8fb577702e0
    		<div className={s.clientPhotos}>
    			{!!client.photos.large?<img src={client.photos.large} />:<img src={pingvin}/>}
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

<<<<<<< HEAD
		</NavLink>

    	</div>

    	)}
</div>

=======
    	</div>
    	)}
</div>
>>>>>>> 2c1173b9aa6a4ae08dd3abfc90e2e8fb577702e0
	)
}
export default Clients;