import React, {  useRef } from 'react'
import s from './clients.module.css'

const SerchField =({checkedFullname,
                     setCheckedFullname,
                     checkedLookingForAJob,
                     setCheckedLookingForAJob,
                     setUpdataPage}) =>{

  const serchFullname = (event) =>{setUpdataPage(event.target.value)}
	return(

<div>
<p>Поиск</p>

{ /*entering search data*/}
           <form>
                    {<input type="text"  onChange={serchFullname} />}                         
                    {<button type='reset' onClick={() => { setUpdataPage('')}}>Очистить</button>  }          
            </form>     

{ /*styling searchField */}

<form>
        <div className={s.checkbox}>
          <label>
           <input type="checkbox" 
           name ="checkbox" 
           checked={checkedFullname} 
           onChange={() => {setCheckedFullname(!checkedFullname)
           					}}
           value="fullName"/>
            По имени
          </label>
        </div>
         
        <div className={s.checkbox}>
          <label>
           <input type="checkbox"
            name ="checkbox"
               onChange={() => { setCheckedLookingForAJob(!checkedLookingForAJob)}}
            value="LookingForAJob"/>
            Поиск работы
            </label>
        </div>
        
      </form>

</div>
	)
}



export default SerchField;