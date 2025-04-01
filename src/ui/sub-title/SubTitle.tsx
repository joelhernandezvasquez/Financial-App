import style from './style.module.css';

interface Props{
    subTitle:string,
    heading?:'h2' | 'h3'
}

const headingLevel2 = (subTitle:string) =>{
  return <h2 className={style.subtitle}>{subTitle}</h2>
}

const headingLevel3 = (subTitle:string) =>{
  return <h3 className={`${style.subtitle} ${style.level_3}`}>{subTitle}</h3>
}

const headingLevels = {
  h2:headingLevel2,
  h3:headingLevel3
}

const SubTitle = ({subTitle,heading}:Props) => {
   const HeadingLevel = headingLevels[heading!] ?? headingLevels.h2; 
  
  return HeadingLevel(subTitle);
  
}



export default SubTitle