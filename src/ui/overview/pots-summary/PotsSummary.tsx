import SubTitle from '@/ui/sub-title/SubTitle';
import style from './style.module.css';
import LinkButton from '@/ui/link-button/LinkButton';

const PotsSummary = () => {
  return (
    <section className={style.pots_container}>
     <header className={style.pots_header}>
        <SubTitle subTitle='Pots'/>
        <LinkButton url={'/pots'} text='See Details'/>
     </header>
      
      <div className={style.total_save_box}>
      total save
      </div>
    </section>
  )
}

export default PotsSummary