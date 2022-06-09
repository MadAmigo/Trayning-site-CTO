import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});
export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <NavLink to='/login' />
            return <Component {...this.props} />
        }
    }
    
    let ConectedAuthRedirectComponent = connect(mapStateToPropsForRedirect) (RedirectComponent);
    return ConectedAuthRedirectComponent;
}