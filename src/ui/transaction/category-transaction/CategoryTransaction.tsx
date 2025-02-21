'use client';
import Image from 'next/image';
import style from './style.module.css';

const CategoryTransaction = () => {
  return (
    <div className={style.category_container}>
        <button className={style.mobile_category_transaction}>
          <Image
           width={20}
           height={21}
           src={'/assets/filterIcon.svg'}
           alt=''
          />
        </button>
    </div>
  )
}

export default CategoryTransaction