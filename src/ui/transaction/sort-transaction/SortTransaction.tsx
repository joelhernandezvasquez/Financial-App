'use client';
import { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import UseClickAway from '@/hooks/click-away/UseClickAway';
import UseToggle from '@/hooks/use-toggle/UseToggle';
import Image from 'next/image';
import Dropdown from '@/ui/dropdown/Dropdown';
import { sortFilterItems } from '@/lib/constants';
import style  from './style.module.css';

export const SortTransaction = () => {
   const {isToggle,handleToggle} = UseToggle();
   const [currentSortValue,setSortValue] = useState('Latest');
   const dropdownRef = UseClickAway(handleToggle);
   const searchParams = useSearchParams();
   const pathname = usePathname();
   const {replace} = useRouter();

   const handleOnClickSortValue = (value:string) =>{
     setSortValue(value);

     const params = new URLSearchParams(searchParams);
     params.set('page','1');
     if(value){
      params.set('sortBy',value)
     }
     else{
      params.delete('sortBy')
     }
     replace(`${pathname}?${params.toString()}`)
     handleToggle();
   } 

   
  return (
    <section className={style.sort_container}>
        {/* Mobile view of the sort transaction */}
        <button className={style.mobile_sort_transaction} onClick={handleToggle}>
          <Image
           width={20}
           height={21}
           src={'/assets/sort.svg'}
           alt=''
          />
        </button>

  {/* Tablet and large screen view of the sort transaction */}
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
              currentItemSelected={currentSortValue}
              callback={handleOnClickSortValue}
              />
          </div>
        )}
    
    </section>
  )
}
