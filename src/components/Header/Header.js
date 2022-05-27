import React from 'react';
import hunter_logo from '../../images/hunter-logo.png';
import {NavLink} from 'react-router-dom';
import login_photo from './../../images/login_photo.jpg';    


import s from './Header.module.css';

const Header =(props) =>{
	
	return(
<div className={s.header}>
<<<<<<< HEAD
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
=======
		<div className={s.logo}>
			<img src={hunter_logo} />
		</div>
		<div className={s.CTO}>
		CTO
		</div>
		<div className={s.HUNTER}>
		HUNTER
		</div>
		{console.log('isAuth',props.isAuth)}
		{props.isAuth?
		<div className={s.login}>
		<img src={login_photo}/>
		<NavLink onClick={props.unLogin} to='/login'><p>unlogin</p></NavLink>
		</div>
		:<div className={s.login}>
		<NavLink  to='/login'><p>login</p></NavLink>
>>>>>>> 2c1173b9aa6a4ae08dd3abfc90e2e8fb577702e0
		</div>
	}
</div>

	)
}
export default Header;