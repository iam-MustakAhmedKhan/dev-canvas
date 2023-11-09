import { Contents } from "@/components/common/contents/Contents";
import { HeroHome } from "@/components/common/hero/HeroHome";
import { getAllDataPromise } from "@/utils";




export default async function Home() {
  const allData = await getAllDataPromise()
  return (
    <div>
      <HeroHome
        title="Fueling Creative Minds."
        description="From Novice to Pro: Tailored Resources for Every Skill Level."
        allData={allData}
      />
      <Contents  allData={allData}/>
    </div>
  );
}
