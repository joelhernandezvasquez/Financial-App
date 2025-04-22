'use client';

import Image from 'next/image';
import UseToggle from '@/hooks/use-toggle/UseToggle';
import form from '../../app/form.module.css';

interface Props{
 dropdownItems:string[],
 currentItemSelected:string,
 callback:(value:string)=> void,
}
const FormDropdown = ({dropdownItems,currentItemSelected,callback}:Props) => {
   const {isToggle,handleToggle} = UseToggle();

   const onCloseDropdown = (e:React.MouseEvent<HTMLLIElement>,item:string) =>{
    callback(item)
    handleToggle();
   }
  return (
    <>
    <div className={form.dropdown_container} onClick={handleToggle}>
      <input type='text' value={currentItemSelected} disabled/>
      <Image
        width={16}
        height={16}
        src={'/assets/arrowDown.svg'}
        alt=''
       />
      {isToggle && (
         <div className={form.dropdown_menu_container}>
         <ul className={form.dropdown_menu}>
         {dropdownItems.map((item)=>{
           { return  currentItemSelected!==item && (
                    <li key={item} onClick={(e:React.MouseEvent<HTMLLIElement>) => onCloseDropdown(e,item)}>{item}</li>)
           }
    
         })}
        </ul>
       </div>
      )}
    </div>
    </>
  )
}

export default FormDropdown