'use client';
import { useState } from 'react';
import Image from 'next/image';
import UseToggle from '@/hooks/use-toggle/UseToggle';
import Dropdown from '@/ui/dropdown/Dropdown';
import { sortFilterItems } from '@/lib/constants';
import UseClickAway from '@/hooks/click-away/UseClickAway';
import style  from './style.module.css';

//TODO: Refactor this component

export const SortTransaction = () => {
   const {isToggle,handleToggle} = UseToggle();
   const [currentSortValue,setSortValue] = useState('Latest');
   const dropdownRef = UseClickAway(handleToggle);

   const handleOnClickSortValue = (value:string) =>{
     setSortValue(value);
     handleToggle();
   } 
  return (
    <section className={style.sort_container}>
        <button className={style.mobile_sort_transaction} onClick={handleToggle}>
          <Image
           width={20}
           height={21}
           src={'/assets/sort.svg'}
           alt=''
          />
        </button>

       <div className={style.larger_screen_sort_transaction}>
         <label htmlFor="sort">Sort by</label>
         <button id='sort' className={style.desktop_sort_transaction} onClick={handleToggle}>
          {currentSortValue}
          <Image
           width={16}
           height={16}
           src={'/assets/arrowDown.svg'}
           alt=''
          />
        </button>
       </div>
      
        {isToggle && (
        <div ref={dropdownRef}>
         <Dropdown 
           dropdownItems={sortFilterItems} 
           callback={handleOnClickSortValue}
           />
        </div>
        )}
    
    </section>
  )
}
