import Image from 'next/image';
import SubTitle from '@/ui/sub-title/SubTitle';
import LinkButton from '@/ui/link-button/LinkButton';
import AmountText from '@/ui/amount-text/AmountText';
import { getPots } from '@/lib/actions';
import style from './style.module.css';

const PotsSummary = async() => {

  const getAllPots = await getPots();

  return (
    <section className={style.pots_container}>
     <header className={style.pots_header}>
        <SubTitle subTitle='Pots'/>
        <LinkButton url={'/pots'} text='See Details'/>
     </header>
      
      <div className={style.total_save_box}>
        <Image
         width={40}
         height={40}
         src={'/assets/moneyPotIcon.svg'}
         alt={''}
        />
        <div className={style.total_save_box_amount}>
          <p className={style.total_save_box_amount_text}>Total Saved</p>
          <AmountText amount={850}/>
        </div>
      </div>

      <div className={style.summary_pots_category_container}>
        <ul className={style.summary_pots_category}>
          {getAllPots.map((pot)=>{
                    // TODO: Convert the li to a component
            return <li key={pot.name} className={style.summary_pots_category_item}>
                     <div style={{backgroundColor:pot.theme}} className={style.category_theme}></div>
                     <div className={style.category_content}>
                        <p className={style.category_content_text}>{pot.name}</p>
                         <p className={style.category_content_amount}>${pot.total}</p>
                     </div>
                   </li>
          })}
        </ul>
      </div>
      
    </section>
  )
}

export default PotsSummary