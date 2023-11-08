import { Contents } from "@/components/common/contents/Contents";
import { HeroHome } from "@/components/common/hero/HeroHome";




export default function Home() {

  return (
    <div>
      <HeroHome
        title="Fueling Creative Minds."
        description="From Novice to Pro: Tailored Resources for Every Skill Level."
      />
      <Contents />
    </div>
  );
}
