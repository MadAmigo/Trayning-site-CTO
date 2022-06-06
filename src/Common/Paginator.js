import React, { useState, useEffect } from 'react'
import s from '../components/Clients/clients.module.css'
import Preloader from './Preloader/Preloader.js'

const Paginator =({totalCount,pageSize=10,getClients}) =>{
   const [currentPage,setCurrentPage]=useState(1)
   useEffect(()=>{getClients(currentPage,pageSize)},[currentPage]) 
	   
   let pageTotal=Math.ceil(totalCount/pageSize)   
   let pageCount = [];
   let i=1
   while (i < pageTotal ) {
    let portion=[];
      let j=1
      do{
        portion.push(i)
        j++
        i++
        if(i===pageTotal){j=pageSize}
      }
      while (j<=pageSize) 
        pageCount.push(portion)
   }
 const [currentPortion,setCurrentPortion]=useState(0)
		const pageForMap=pageCount[currentPortion]
		 
		const changeCurrentPortionForward=(currentPortion)=>{
		setCurrentPortion(currentPortion-1)
		setCurrentPage((currentPortion-1)*pageSize+1)
	}
		
		const changeCurrentPortionBack=(currentPortion)=>{
		setCurrentPortion(currentPortion+1)
		setCurrentPage((currentPortion+1)*pageSize+1)
}
	return(
	!pageTotal? <Preloader/>:
	<div className={s.paging}>
	  
	{(currentPortion >0)&&<button onClick={()=>changeCurrentPortionForward(currentPortion)}>назад</button>}
           {pageForMap.map((p,index)=>
	           	<div key={index} className={(p===currentPage)?(`${s.numberPage} ${s.active}`):s.numberPage} onClick={()=>setCurrentPage(p)}>
		 	{p}
		 	</div>
	 	)}
	   	{(currentPortion < pageCount.length-1)&&<button onClick={()=>changeCurrentPortionBack(currentPortion)}>вперед</button>}
       </div>
		)
}
export default Paginator;