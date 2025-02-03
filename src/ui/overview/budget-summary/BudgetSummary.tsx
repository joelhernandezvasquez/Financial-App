import SubTitle from '@/ui/sub-title/SubTitle';
import LinkButton from '@/ui/link-button/LinkButton';
import Image from 'next/image';
import { Budget } from '@/lib/definitions';
import PotsCategory from '../pots-summary/pots-category/PotsCategory';
import style from './style.module.css';

const budgets:Budget[] =  [
        {
            id:1,
            category: "Entertainment",
            maximum: 50.00,
            theme: "#277C78"
        },
        {
            id:2,
            category: "Bills",
            maximum: 750.00,
            theme: "#82C9D7"
        },
        {
            id:3,
            category: "Dining Out",
            maximum: 75.00,
            theme: "#F2CDAC"
        },
        {
            id:4,
            category: "Personal Care",
            maximum: 100.00,
            theme: "#626070"
        }
    ]

export const BudgetSummary = () => {
  return (
    <section className={style.budget_container}>
      <header className={style.budget_header}>
        <SubTitle subTitle='Budgets'/>
        <LinkButton url={'/budget'} text='See Details'/>
     </header>

     <div className={style.budget_content}>
      <Image
       className={style.image_chart}
       width={240}
       height={240}
       src={'/assets/Chart.svg'}
       alt=''
      />
       
       <div className={style.summary_budget_category_container}>
        <ul className={style.summary_budget_category}>
          {budgets.map((budget)=>{
            return <PotsCategory key={budget.id} budget={budget}/>
          })}
        </ul>
      </div>

     </div>
    </section>
  )
}
