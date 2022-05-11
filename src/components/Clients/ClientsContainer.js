import React, { useState, useEffect } from 'react';
import { connect} from 'react-redux';
import { compose } from 'redux';
import Clients from './Clients.js';
import {getClients} from './../../redux/clientReducer.js';





const ClientsContainer = (props)=>{
   const [currentPage,setCurrentPage]=useState(1)
   useEffect(()=>{props.getClients(currentPage,props.pageSize)},[currentPage]) 
console.log('currentPage',currentPage)
   let pageTotal=123
   //Math.ceil(props.totalCount/props.pageSize)
   //console.log('pageTotal',pageTotal)
   
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
		<Clients clients={props.clients}
            getClients={props.getClients}
             pageCount={pageCount}
             setCurrentPage={setCurrentPage}
             pageSize={props.pageSize}
             currentPage={currentPage}
    />
		)
}


const mapStateToProps = (state) => {
  return { clients: state.clientsPage.clients,
  		   pageSize:state.clientsPage.pageSize,
  		   currentPage:state.clientsPage.currentPage,
         totalCount: state.clientsPage.totalCount,
   };
  }; 

  export default compose(
    connect(mapStateToProps, {getClients}),
   
)(ClientsContainer)

