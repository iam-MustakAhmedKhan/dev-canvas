

import Contributors from "@/components/Contributors";
import { Description, SearchBox, SelectInput } from "..";


const HeroHome = ({ contributors, title, description, icon }) => {
  return (
    <main className="py-[136px]">
      <div className="flex flex-col items-center justify-center">
        <Description
          title={title}
          description={description}
          icon={icon}

        />
        {contributors ? <Contributors contributors={contributors} />
          :
          <>
            <div className="flex items-center gap-3 py-8">
              <SearchBox />
              <SelectInput />
            </div>
            <h3 className="font-bold">Trending: <span className="font-normal">Javascipt,React js,Linkedin</span></h3>
          </>}
      </div>
    </main>
  );
};

export { HeroHome };