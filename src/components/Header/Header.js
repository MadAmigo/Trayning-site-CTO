import React from 'react';
import hunter_logo from '../../images/hunter-logo.png';
import {NavLink} from 'react-router-dom';
import login_photo from './../../images/login_photo.jpg';    


import s from './Header.module.css';

const Header =(props) =>{
	
	return(
<div className={s.header}>

		<div className={s.logo} >
			<img src={hunter_logo} alt=''/>
		</div>
		<div className={s.CTO} translate="no">
			CTO
		</div>
		<div className={s.HUNTER} translate="no">
			HUNTER
		</div>

		{props.isAuth?
		<div className={s.login}>
			<img src={login_photo}/>
			<NavLink onClick={props.unLogin} to='/login'><p>unlogin</p></NavLink>
		</div>
		:<div className={s.login}>
			<NavLink  to='/login'><p>login</p></NavLink>

	

		</div>
	}
</div>

	)
}
export default Header;