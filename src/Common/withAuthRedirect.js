import React from 'react'
import {Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { Selectors } from '../redux/selectors.js'

let mapStateToPropsForRedirect = (state) => ({
    isAuth: Selectors.getIsAuth(state),
    isInitial: Selectors.getIsInitial(state)
})
export const withAuthRedirect = (Component) => {
    const RedirectComponent =(props) => {
       		if (!props.isInitial) return (<div>Loading...</div>)
            if (!props.isInitial || !props.isAuth) return <Navigate   to="/login"  /> 
            return <Component {...props} />
        
    }
    
    let ConectedAuthRedirectComponent = connect(mapStateToPropsForRedirect) (RedirectComponent);
    return ConectedAuthRedirectComponent
}