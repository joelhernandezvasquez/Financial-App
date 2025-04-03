import { ContentTitle } from "@/ui/content-title/ContentTitle";
import OpenModalBtn from "@/ui/open-modal-btn/OpenModalBtn";
import { BudgetChart } from "@/ui/pie-chart/BudgetChart";
import BudgetCardContainer from "@/ui/budget/budget-card-container/BudgetCardContainer";
import BudgetSpendingSummary from "@/ui/budget/budget-spending-summary/BudgetSpendingSummary";
import { getSpendingSummary } from "@/lib/actions";
import { getCurrentBalance, mappedChartData } from "@/lib/utils";
import style from './style.module.css';

export default async function Budget(){
    const spendingSummary = await getSpendingSummary();
    const chartData = mappedChartData(spendingSummary);
    const currentBalance = getCurrentBalance(spendingSummary);

    return( 
 <>
       <header className={style.header}>
         <ContentTitle title="budgets"/>
         <OpenModalBtn textBtn="Add New Budget"/>
       </header>
     
       <main className={style.budget_grid_main}>
          <div className={style.budget_container}>
            <BudgetChart chartData={chartData} currentBalance={currentBalance}/>
            <BudgetSpendingSummary spendingSummary={spendingSummary}/>
          </div>
          
          <BudgetCardContainer budgetItems={spendingSummary}/>
       </main>
</>          
)}