'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { generatePagination } from '@/lib/utils';
import PaginationArrow from './pagination-arrow/PaginationArrow';
import PaginationNumber from './pagination-number/PaginationNumber';
import style from './style.module.css';

interface Props{
  totalPages:number
}

const TransactionPagination = ({totalPages}:Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const allPages = generatePagination(currentPage, totalPages);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <section className={style.pagination_container}>

      <PaginationArrow
       direction='left'
       href={createPageURL(currentPage - 1)}
       isDisabled = {currentPage <=1}
      />

    <ul className={style.pagination_list_btns}>
     {allPages.map((page)=>{
      // let position: 'first' | 'last' | 'single' | 'middle' | undefined;

      // if (index === 0) position = 'first';
      // if (index === allPages.length - 1) position = 'last';
      // if (allPages.length === 1) position = 'single';
      // if (page === '...') position = 'middle';

      return (
        <li key={page}>
          <PaginationNumber
            key={page}
            href={createPageURL(page)}
            page={page}
            isActive = {currentPage === page}
          />
        </li>
        
      )
     })}
     
    </ul>
     
    <PaginationArrow
       direction='right'
       href={createPageURL(currentPage + 1)}
       isDisabled = {currentPage >=totalPages}
      />
    </section>
  )
}

export default TransactionPagination