import Image from 'next/image';
import SubTitle from '@/ui/sub-title/SubTitle';
import LinkButton from '@/ui/link-button/LinkButton';
import AmountText from '@/ui/amount-text/AmountText';
import style from './style.module.css';

const pots = [
  {
      name: "Savings",
      target: 2000.00,
      total: 159.00,
      theme: "#277C78"
  },
  {
      name: "Concert Ticket",
      target: 150.00,
      total: 110.00,
      theme: "#626070"
  },
  {
      name: "Gift",
      target: 150.00,
      total: 110.00,
      theme: "#82C9D7"
  },
  {
      name: "New Laptop",
      target: 1000.00,
      total: 10.00,
      theme: "#F2CDAC"
  },
  {
      name: "Holiday",
      target: 1440.00,
      total: 531.00,
      theme: "#826CB0"
  }
]

const PotsSummary = () => {
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
          {pots.map((pot)=>{
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