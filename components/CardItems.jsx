import { organizeData } from "@/utils"
import { sort } from "@/utils/sort"
import { Card } from "./common/Card"

const CardItems = ({ filename, fileData, contentFilter }) => {
  const data = fileData
  const organized = organizeData(sort(data))

  const contentF = (value) => {
    const val = value.subCategory.trim().toLowerCase()
    const cValue = contentFilter.trim().toLowerCase()

    if (val == cValue) {
      return val == cValue
    }
    if (cValue === "all") {
      return true
    }
  }

  return (
    <div className="pb-12">
      {Object.keys(organized).map((data, i) => (
        <div key={i} className="py-5">
          {contentFilter === "All" ? (
            <div className="py-1">
              <h1 className="font-bold text-[28px]">{data}</h1>
            </div>
          ) : (
            ""
          )}

          <div className="grid grid-cols-2 gap-10">
            {organized[data].filter(contentF).map((ogData, i) => (
              <Card key={i} data={ogData} parentRoute={filename} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardItems
