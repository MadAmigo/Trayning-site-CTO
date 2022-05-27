import React, { useState, useEffect } from 'react';
import { connect} from 'react-redux';
import { compose } from 'redux';
import Clients from './Clients.js';
import {getClients} from './../../redux/clientReducer.js';
<<<<<<< HEAD
import Preloader from './../Preloader/Preloader.js'
=======

>>>>>>> 2c1173b9aa6a4ae08dd3abfc90e2e8fb577702e0




const ClientsContainer = (props)=>{
   const [currentPage,setCurrentPage]=useState(1)
   useEffect(()=>{props.getClients(currentPage,props.pageSize)},[currentPage]) 
<<<<<<< HEAD

   let pageTotal=Math.ceil(props.totalCount/props.pageSize)
  
=======
console.log('currentPage',currentPage)
   let pageTotal=123
   //Math.ceil(props.totalCount/props.pageSize)
   //console.log('pageTotal',pageTotal)
   
>>>>>>> 2c1173b9aa6a4ae08dd3abfc90e2e8fb577702e0
   let pageCount = [];
   let i=1
   while (i < pageTotal ) {
    let portion=[];
      let j=1
      do{
        portion.push(i)
        j++
        i++
        if(i===pageTotal){j=10}
      }
      while (j<=10) 
        pageCount.push(portion)
   }

   
	return (
<<<<<<< HEAD
    !pageTotal?<Preloader/>:

=======
>>>>>>> 2c1173b9aa6a4ae08dd3abfc90e2e8fb577702e0
		<Clients clients={props.clients}
            getClients={props.getClients}
             pageCount={pageCount}
             setCurrentPage={setCurrentPage}
             pageSize={props.pageSize}
             currentPage={currentPage}
<<<<<<< HEAD
             toggleIsFetching={props.toggleIsFetching}
           
=======
>>>>>>> 2c1173b9aa6a4ae08dd3abfc90e2e8fb577702e0
    />
		)
}


const mapStateToProps = (state) => {
  return { clients: state.clientsPage.clients,
  		   pageSize:state.clientsPage.pageSize,
  		   currentPage:state.clientsPage.currentPage,
         totalCount: state.clientsPage.totalCount,
<<<<<<< HEAD
         toggleIsFetching:state.clientsPage.toggleIsFetching
=======
>>>>>>> 2c1173b9aa6a4ae08dd3abfc90e2e8fb577702e0
   };
  }; 

  export default compose(
    connect(mapStateToProps, {getClients}),
   
)(ClientsContainer)

