'use client';
import Image from 'next/image';
import style  from './style.module.css';;

export const SortTransaction = () => {
  return (
    <div className={style.sort_container}>
        <button className={style.mobile_sort_transaction}>
          <Image
           width={20}
           height={21}
           src={'/assets/sort.svg'}
           alt=''
          />
        </button>
    </div>
  )
}
