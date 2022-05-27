import React from 'react';
import s from './Preloader.module.css';

const Preloader =() =>{
	
	return(
<div className={s.preloader}>
		<div className={s.loader}>
	<div className={s.loader_inner}>
		<div className={s.loader_line_wrap}>
			<div className={s.loader_line}></div>
		</div>
		<div className={s.loader_line_wrap}>
			<div className={s.loader_line}></div>
		</div>
		<div className={s.loader_line_wrap}>
			<div className={s.loader_line}></div>
		</div>
		<div className={s.loader_line_wrap}>
			<div className={s.loader_line}></div>
		</div>
		<div className={s.loader_line_wrap}>
			<div className={s.loader_line}></div>
		</div>
	</div>
</div>
</div>

	)
}
export default Preloader;