import React from 'react'
import { connect} from 'react-redux'
import { compose } from 'redux'
import Clients from './Clients.js'
import {getClients} from './../../redux/clientReducer.js'
import { Selectors } from '../../redux/selectors.js'
import {setTotalPageCount} from '../../redux/clientReducer.js'

const ClientsContainer = (props)=>{
     

  return (
		<Clients clients={props.clients}
              pageSize={props.pageSize}
              totalCount={props.totalCount}
              getClients={props.getClients}
              setTotalPageCount={props.setTotalPageCount}           
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
        connect(mapStateToProps, {getClients,setTotalPageCount}),  
        )(ClientsContainer)

