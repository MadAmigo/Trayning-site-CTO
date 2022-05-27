import React, {useEffect} from 'react'
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'
import store from '../../redux/store.js'  
import Preloader from '../Preloader/Preloader.js'
import {getClientProfile} from '../../redux/ProfileReducer.js'


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
		<NavLink className={(navData)=> navData.isActive ? s.active: s.element_navbar} to={`/profile/21858`} >Профіль</NavLink>  
		</div>
		
</div>
</div>
	)
}
export default Navbar;