import Image from 'next/image';
import { getPots } from '@/lib/actions';
import SubTitle from '@/ui/sub-title/SubTitle';
import LinkButton from '@/ui/link-button/LinkButton';
import AmountText from '@/ui/amount-text/AmountText';
import PotsCategory from './pots-category/PotsCategory';
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
            return <PotsCategory key={pot.id} pot={pot}/>
          })}
        </ul>
      </div>
      
    </section>
  )
}
export default PotsSummary