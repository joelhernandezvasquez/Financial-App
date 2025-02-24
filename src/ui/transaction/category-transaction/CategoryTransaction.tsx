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

const CategoryTransaction = ({categories}:Props) => {
  
  const {isToggle,handleToggle} = UseToggle();
  const [currentCategory,setCategory] = useState('');
  const dropdownRef = UseClickAway(handleToggle);

  const handleOnClickCategory = (value:string) =>{
    setCategory(value);
    handleToggle();
  } 

  console.log(currentCategory)

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