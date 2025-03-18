'use client'

import style from './style.module.css';
interface Props{
 dropdownItems:string[],
 currentItemSelected:string,
 callback:(value:string)=> void,
}
const Dropdown = ({dropdownItems,currentItemSelected,callback}:Props) => {
  
  return (
    <aside className={style.dropdown_container}>
       <ul className={style.dropdown_menu}>
        {dropdownItems.map((item)=>{
          { return  currentItemSelected!==item && (
                   <li key={item} onClick={() => callback(item)}>{item}</li>)
          }
   
        })}
       </ul>
    </aside>
  )
}

export default Dropdown