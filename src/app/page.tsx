import { Suspense } from "react";
import { ContentTitle } from "@/ui/content-title/ContentTitle";
import { BalanceSumary } from "@/ui/overview/balance-summary/BalanceSumary";

export default function Home() {
  return (
      <main>
        <ContentTitle title="overview"/>
        {/* TODO:Need to have a suspense boundary along with a loading file with the skeleton */}
        <Suspense fallback={'Loading...'}>
           <BalanceSumary/>
        </Suspense>
     </main>

  );
}
