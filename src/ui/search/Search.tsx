import Image from 'next/image';
import style from './style.module.css';

const Search = () => {
  return (
    <div className={style.search}>
    <input className={style.search_input} type="text" placeholder="Search transaction"/>
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