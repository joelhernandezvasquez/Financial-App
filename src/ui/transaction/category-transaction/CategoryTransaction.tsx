'use client';
import UseToggle from '@/hooks/use-toggle/UseToggle';
import { useState } from 'react';
import Image from 'next/image';
import Dropdown from '@/ui/dropdown/Dropdown';
import style from './style.module.css';
import UseClickAway from '@/hooks/click-away/UseClickAway';

interface Props{
  categories: string[]
}
//TODO: Refactor this component

const CategoryTransaction = ({categories}:Props) => {
  
  const {isToggle,handleToggle} = UseToggle();
  const [currentCategory,setCategory] = useState('All Transactions');
  const dropdownRef = UseClickAway(handleToggle);

  const handleOnClickCategory = (value:string) =>{
    setCategory(value);
    handleToggle();
  } 

  return (
    <div className={style.category_container}>
        <button className={style.mobile_category_transaction} onClick={handleToggle}>
          <Image
           width={20}
           height={21}
           src={'/assets/filterIcon.svg'}
           alt=''
          />
        </button>

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