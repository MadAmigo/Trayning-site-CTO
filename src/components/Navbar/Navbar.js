<<<<<<< HEAD
import React, {useEffect} from 'react'
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'
import store from '../../redux/store.js'  
import Preloader from '../Preloader/Preloader.js'
import {getClientProfile} from '../../redux/ProfileReducer.js'


const Navbar =() =>{
	
=======
import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';    

const Navbar =() =>{
>>>>>>> 2c1173b9aa6a4ae08dd3abfc90e2e8fb577702e0
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
<<<<<<< HEAD
		<NavLink className={(navData)=> navData.isActive ? s.active: s.element_navbar} to={`/profile/21858`} >Профіль</NavLink>  
=======
		<NavLink className={(navData)=> navData.isActive ? s.active: s.element_navbar} to="/profile" >Профіль</NavLink>  
>>>>>>> 2c1173b9aa6a4ae08dd3abfc90e2e8fb577702e0
		</div>
		
</div>
</div>
	)
}
export default Navbar;