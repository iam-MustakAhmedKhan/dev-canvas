import Image from "next/image";
import { Copy } from 'lucide-react';

import Link from "next/link";
import { ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";


const SingleItem = ({name,logo,link,description,category,subCategory}) => {
  return (
    <div className="flex-1">

      <div className="bg-[#e8e8e8] flex items-center justify-center border-4 border-[#181818] rounded-[6px] w-[304px] h-[304px]">
        <Image src={logo} width={140} height={140} alt="singleItem" />
      </div>
      <div className="py-3">
        <h1 className="text-[32px] font-bold">{name}</h1>
        <h2 className="text-[22px] text-muted-foreground font-semibold">{category} / { subCategory}</h2>
      </div>
      <div className="flex items-center gap-7">
        <div className="bg-[#e8e8e8]  w-[300px] flex items-center gap-4 rounded-[6px] justify-between ">
          <div className="w-[210px] px-5 ">
            <p className="text-[16px] text-[#181818a8] font-semibold truncate">{ link}</p>
          </div>
          <div>
            <Button variant="ghost" className="text-muted-foreground">
              <Copy />
            </Button>
          </div>
        </div>

        <Link href={link} target="_blank" rel="noopner nofollow">
          <Button variant="outline">
            Goto
            <ExternalLink width={20} height={20} className="ml-3"/>
          </Button>
        </Link>

      </div>

      <div className="py-10">
        <p className="text-[18px]">{ description}</p>
      </div>

    </div>
  );
};

export default SingleItem;