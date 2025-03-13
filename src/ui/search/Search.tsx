'use client';

import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import style from './style.module.css';

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();


  const handleSearch = useDebouncedCallback((term:string) =>{
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
   
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  },300)


  return (
    <div className={style.search}>
    <input 
     className={style.search_input} 
     type="text" 
     placeholder="Search transaction"
     onChange={(e) => handleSearch(e.target.value)}
     defaultValue={searchParams.get('query')?.toString()}
     />
    <Image
     width={16}
     height={16}
     src={'/assets/searchIcon.svg'}
     alt=""
    />
 </div>
  )
}

export default Search