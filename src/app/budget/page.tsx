import { ContentTitle } from "@/ui/content-title/ContentTitle";
import OpenModalBtn from "@/ui/open-modal-btn/OpenModalBtn";
import { BudgetChart } from "@/ui/pie-chart/BudgetChart";
import { getSpendingSummary } from "@/lib/actions";
import { getCurrentBalance, mappedChartData } from "@/lib/utils";
import SubTitle from "@/ui/sub-title/SubTitle";
import SpendingSummaryItem from "@/ui/budget/spending-summary-item/SpendingSummaryItem";
import style from './style.module.css';
import BudgetCardContainer from "@/ui/budget/budget-card-container/BudgetCardContainer";

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
     
       <main>
        <div className={style.budget_container}>
         <BudgetChart chartData={chartData} currentBalance={currentBalance}/>
          
          <div className={style.spending_summary_container}>
             <SubTitle subTitle="Spending Summary"/>
             <ul className={style.spending_summary_item}>
               {spendingSummary.map((item)=>{
                return <SpendingSummaryItem 
                         key={item.id} 
                         category={item.category}
                         theme={item.theme}
                         spent={item.spent}
                         maximum={item.maximum}
                        />
               })}
             </ul>
          </div>
        </div>
        
        <BudgetCardContainer budgetItems={spendingSummary}/>
       </main>
</>          
)}