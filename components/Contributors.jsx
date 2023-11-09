"use client"
import { contributor } from "@/utils/contributors"
import Image from "next/image"
import Link from "next/link"
import { useCallback } from "react"
import { useEffect } from "react"
import { useState } from "react"

const Contributors = ({ contributors }) => {
  const [contri, setData] = useState({})

  const getData = useCallback(async () => {
    const d = await contributor(contributors)
    setData(d)
  }, [contributors])

  useEffect(() => {
    getData()
  }, [getData])

  const allData = Object.keys(contri)

  return (
    <div className="py-5">
      <h1 className="font-bold py-2">Contributor&apos;s</h1>
      <div className="flex items-center justify-center gap-2">
        {allData.map((data, i) => (
          <Link
            key={i}
            href={contri[data].html_url}
            target="_blank"
            rel="noopener nofollow"
          >
            <div className="border p-1 items-center flex justify-center rounded-md w-[50px] h-[50px]">
              <Image
                width={50}
                height={50}
                src={contri[data].avatar_url}
                alt={contri[data].name}
                title={`${contri[data].name} - ${contri[data].count} Contributes`}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Contributors
