import SubTitle from '@/ui/sub-title/SubTitle';
import LinkButton from '@/ui/link-button/LinkButton';
import PotsCategory from '../pots-summary/pots-category/PotsCategory';
import { getBudgets } from '@/lib/actions';
import { BudgetChart } from '@/ui/pie-chart/BudgetChart';
import { mappedChartData } from '@/lib/utils';
import style from './style.module.css';

export const BudgetSummary = async () => {
  const budgets = await getBudgets();
  const chartData = mappedChartData(budgets);
  const currentBalance = 338;

  return (
    <section className={style.budget_container}>
      <header className={style.budget_header}>
        <SubTitle subTitle='Budgets'/>
        <LinkButton url={'/budget'} text='See Details'/>
     </header>

     <div className={style.budget_content}>
       <BudgetChart chartData={chartData} currentBalance={currentBalance}/>
       
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
