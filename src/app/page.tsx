import { Suspense } from "react";
import { ContentTitle } from "@/ui/content-title/ContentTitle";
import { BalanceSumary } from "@/ui/overview/balance-summary/BalanceSumary";
import PotsSummary from "@/ui/overview/pots-summary/PotsSummary";
import TransactionSummary from "@/ui/overview/transactions-summary/TransactionSummary";
import { BudgetSummary } from "@/ui/overview/budget-summary/BudgetSummary";
import RecurringBillsSummary from "@/ui/overview/recurring-bills-summary/RecurringBillsSummary";

export default function Home() {
  return (
      <main>
        <ContentTitle title="overview"/>
        {/* TODO:Need to have a suspense boundary along with a loading file with the skeleton */}
        <Suspense fallback={'Loading...'}>
           <BalanceSumary/>
        </Suspense>

        <Suspense fallback={'Loading...'}>
          <PotsSummary/>
        </Suspense>

        <Suspense fallback={'Loading...'}>
          <TransactionSummary/>
        </Suspense>

        <Suspense fallback={'Loading...'}>
          <BudgetSummary/>
        </Suspense>

        <Suspense fallback={'Loading...'}>
           <RecurringBillsSummary/>
        </Suspense>

     </main>

  );
}
