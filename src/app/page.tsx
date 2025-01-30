import { Suspense } from "react";
import { ContentTitle } from "@/ui/content-title/ContentTitle";
import { BalanceSumary } from "@/ui/overview/balance-summary/BalanceSumary";
import PotsSummary from "@/ui/overview/pots-summary/PotsSummary";
import TransactionSummary from "@/ui/overview/transactions-summary/TransactionSummary";

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


     </main>

  );
}
