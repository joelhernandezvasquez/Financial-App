import style from './style.module.css';

interface Props{
    theme:string,
    height?:'sm'
}
export const CategoryThemeIndicator = ({theme,height}:Props) => {
  return (
    <div 
      style={{backgroundColor:theme}} 
      className={`${style.category_theme} ${style[height!]}`}
      >
     </div>
  )
}
