"use client"

import { useParams } from "next/navigation"
import { getSingleData } from "@/utils"
import SingleItem from "./SingleItem"
import Similar from "./Similar"
import { HeroHome } from "./common/hero/HeroHome"

const Items = () => {
  const { category, item } = useParams()
  const { content } = getSingleData(category)

  const data = content.find((c) => c.slug === item)

  const { name, logo, link, description, category: ctg, subCategory } = data

  return (
    <div>
      <HeroHome contributors={category} title={name} icon={logo} />

      <div className="pb-12 flex items-start gap-20">
        <SingleItem
          name={name}
          logo={logo}
          link={link}
          category={ctg}
          subCategory={subCategory}
          description={description}
        />
        <Similar filename={category} subCategory={subCategory} name={name} />
      </div>
    </div>
  )
}

export default Items
