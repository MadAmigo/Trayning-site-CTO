import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';    

const Navbar =() =>{
	return(
    <div className={s.navbar_wrapper}>
    	<p>Меню:</p>
	<div className={s.navbar}>
       
		<div className={s.item}>
			<NavLink className={(navData)=> navData.isActive ? s.active: s.element_navbar} to="/main" >Головна
			</NavLink>  
		</div>
		<div className={s.item}>
			<NavLink className={(navData)=> navData.isActive ? s.active: s.element_navbar} to="/users"> Клієнти</NavLink>
		</div>
		<div className={s.item}>
		<NavLink className={(navData)=> navData.isActive ? s.active: s.element_navbar} to="/profile" >Профіль</NavLink>  
		</div>
		
</div>
</div>
	)
}
export default Navbar;