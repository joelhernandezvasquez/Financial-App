'use client';
import { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import UseToggle from '@/hooks/use-toggle/UseToggle';
import UseClickAway from '@/hooks/click-away/UseClickAway';
import Image from 'next/image';
import Dropdown from '@/ui/dropdown/Dropdown';
import style from './style.module.css';

interface Props{
  categories: string[]
}

const CategoryTransaction = ({categories}:Props) => {
  const {isToggle,handleToggle} = UseToggle();
  const [currentCategory,setCategory] = useState('All Transactions');
  const dropdownRef = UseClickAway(handleToggle);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();

  const handleOnClickCategory = (value:string) =>{
    setCategory(value);
   
    const params = new URLSearchParams(searchParams);
    params.set('page','1');

    if(value){
      params.set('query', value);
    }
    else{
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
    handleToggle();
  } 

  return (
    <div className={style.category_container}>
          {/* Mobile view of the category transaction */}
        <button className={style.mobile_category_transaction} onClick={handleToggle}>
          <Image
           width={20}
           height={21}
           src={'/assets/filterIcon.svg'}
           alt=''
          />
        </button>

      {/* Tablet and large screen view of the sort transaction */}
        <div className={style.larger_screen_category_transaction}>
         <label htmlFor="category">Category</label>
         <button id='category' className={style.desktop_category_transaction} onClick={handleToggle}>
          {currentCategory}
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
           dropdownItems={categories} 
           callback={handleOnClickCategory}
           />
        </div>
        )}       
    </div>
  )
}

export default CategoryTransaction