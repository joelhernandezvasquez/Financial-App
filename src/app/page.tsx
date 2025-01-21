import { ContentTitle } from "@/ui/content-title/ContentTitle";
import { BalanceSumary } from "@/ui/overview/balance-summary/BalanceSumary";

export default function Home() {
  return (
      <main>
        <ContentTitle title="overview"/>
        <BalanceSumary/>
     </main>

  );
}
