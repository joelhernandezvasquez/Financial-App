'use client';
import { useState } from 'react';
import Image from 'next/image';
import UseToggle from '@/hooks/use-toggle/UseToggle';
import Dropdown from '@/ui/dropdown/Dropdown';
import { sortFilterItems } from '@/lib/constants';
import UseClickAway from '@/hooks/click-away/UseClickAway';
import style  from './style.module.css';

export const SortTransaction = () => {
   const {isToggle,handleToggle} = UseToggle();
   const [currentSortValue,setSortValue] = useState('');
   const dropdownRef = UseClickAway(handleToggle);

   const handleOnClickSortValue = (value:string) =>{
     setSortValue(value);
     handleToggle();
   } 
   console.log(currentSortValue);
  return (
    <div className={style.sort_container}>
        <button className={style.mobile_sort_transaction} onClick={handleToggle}>
          <Image
           width={20}
           height={21}
           src={'/assets/sort.svg'}
           alt=''
          />
        </button>
      
        {isToggle && (
        <div ref={dropdownRef}>
         <Dropdown 
           dropdownItems={sortFilterItems} 
           callback={handleOnClickSortValue}
           />
        </div>
        )}
    
    </div>
  )
}
