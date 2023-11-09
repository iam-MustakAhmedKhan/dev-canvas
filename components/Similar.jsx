import { getSimilarItems } from "@/utils"
import { Card } from "./common/Card"

const Similar = ({ filename, subCategory, name }) => {
  const data = getSimilarItems(filename, subCategory, name)

  return (
    <div className="flex-1">
      <h1 className="text-[32px] font-semibold mb-[32px]">Similar Resources</h1>

      <div className="flex flex-col gap-2">
        {data.map((d, i) => (
          <Card key={i} data={d} />
        ))}
      </div>
    </div>
  )
}

export default Similar
