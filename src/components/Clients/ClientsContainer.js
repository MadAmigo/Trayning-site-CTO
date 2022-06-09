import React from 'react'
import { connect} from 'react-redux'
import { compose } from 'redux'
import Clients from './Clients.js'
import {getClients} from './../../redux/clientReducer.js'
import { Selectors } from '../../redux/selectors.js'
import Preloader from '../../Common/Preloader/Preloader.js'


const ClientsContainer = (props)=>{
     
//	if(props.toggleIsFetchingClients) 
 // return (<Preloader />)
  return (
		<Clients clients={props.clients}
              pageSize={props.pageSize}
              totalCount={props.totalCount}
              getClients={props.getClients}           
              />
           		)
}

const mapStateToProps = (state) => {
 return { clients: Selectors.getClients(state),
          pageSize:  Selectors.getPageSize(state),
          currentPage:  Selectors.getCurrentPage(state),
          totalCount: Selectors.getTotalCount(state),
          toggleIsFetchingClients: Selectors.getToggleIsFetchingClients(state),
   }
  } 

  export default compose(
        connect(mapStateToProps, {getClients}),  
        )(ClientsContainer)

