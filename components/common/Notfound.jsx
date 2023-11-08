import useStore from "@/state/store";
import { Button } from "../ui/button";
import Link from "next/link";
import { Github } from 'lucide-react';



const NotFound = () => {
    const searchValue = useStore((state) => state.searchValue)
  return (
      <div className="flex items-center justify-between">
          <p> No resource found named <span className="font-bold">{searchValue}</span></p>
          <Link href="https://github.com/iam-MustakAhmedKhan/dev-canvas" target="_blank" rel="noopener nofollow">
              <Button variant="outline">
                  <Github width={20} height={20} />
                    Contribute
              </Button>
          </Link>
    </div>
  )
}

export default NotFound