import React from 'react'
import { connect} from 'react-redux'
import { compose } from 'redux'
import Clients from './Clients.js'
import {getClients} from './../../redux/clientReducer.js'
import {getSelectorClients,getSelectorPageSize,getSelectorCurrentPage,getSelectorTotalCount,getSelectorToggleIsFetching } from '../../redux/selectors.js'





const ClientsContainer = (props)=>{
     
	return (
		<Clients clients={props.clients}
              pageSize={props.pageSize}
              totalCount={props.totalCount}
              getClients={props.getClients}           
              toggleIsFetching={props.toggleIsFetching}/>
           		)
}

const mapStateToProps = (state) => {
 return { clients: getSelectorClients(state),
          pageSize: getSelectorPageSize(state),
          currentPage: getSelectorCurrentPage(state),
          totalCount: getSelectorTotalCount(state),
          toggleIsFetching: getSelectorToggleIsFetching(state),
   }
  } 

  export default compose(
        connect(mapStateToProps, {getClients}),  
        )(ClientsContainer)

