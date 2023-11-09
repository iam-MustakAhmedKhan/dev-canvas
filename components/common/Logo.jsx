"use client"
import Link from "next/link"

const Logo = ({ bg, text, subTextColor }) => {
  return (
    <Link
      href="/"
      className={`uppercase font-bold flex items-center text-[${
        subTextColor ? subTextColor : ""
      }] text-[24px]`}
    >
      dev
      <span
        className={`${
          bg ? `bg-[${bg}]` : "bg-[#181818]"
        } dark:bg-[#ffffff] text-[${
          text ? text : "#ffffff"
        }] dark:text-[#181818] px-[6px] ml-1  leading-normal rounded-md`}
      >
        canvas
      </span>
    </Link>
  )
}

export { Logo }
