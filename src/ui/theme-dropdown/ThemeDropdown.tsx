'use client';
import Image from 'next/image';
import UseToggle from '@/hooks/use-toggle/UseToggle';
import { ThemeColor } from '@/lib/definitions';
import ThemeElipsis from '../theme-elipsis/ThemeElipsis';
import form from '../../app/form.module.css';

interface Props{
    dropdownItems:ThemeColor[],
    currentItemSelected:ThemeColor,
    callback:(value:ThemeColor)=> void,
   }

   
const ThemeDropdown = ({dropdownItems,currentItemSelected,callback}:Props) => {
    const {isToggle,handleToggle} = UseToggle();
    
    const onCloseDropdown = (e:React.MouseEvent<HTMLLIElement>,item:ThemeColor) =>{
        callback(item)
        handleToggle();
    }
    return (
        <>
        <div className={form.dropdown_container} onClick={handleToggle}>
          <div className={form.flex}>
            <ThemeElipsis theme={currentItemSelected.color}/>
            <span>{currentItemSelected.theme}</span>
          </div>
          
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
                        <li className={form.flex} key={item.theme}
                            onClick={
                              item.isUsed 
                              ? undefined
                              :(e:React.MouseEvent<HTMLLIElement>) => onCloseDropdown(e,item)
                              }>
                            <ThemeElipsis theme={item.color} isDisable={item.isUsed}/>
                            <span className={`${ item.isUsed && form.theme_disable}`}>{item.theme}</span>
                            {item.isUsed && <span className={form.theme_use}>Already used</span> } 
                        
                        </li>)
               }
        
             })}
            </ul>
           </div>
          )}
        </div>
        </>
  )
}

export default ThemeDropdown