
import style from './style.module.css';

interface Props{
    theme:string,
    isDisable?:boolean
}
const ThemeElipsis = ({theme,isDisable}:Props) => {
  return (
    <span style={{backgroundColor:theme}} 
    className={`${style.category_theme_elipsis} ${isDisable && style.is_disable}`}></span>
  )
}

export default ThemeElipsis