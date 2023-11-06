import Link from "next/link";

const Logo = () => {
  return (
      <Link href="/" className="uppercase font-bold flex items-center text-[24px]">
          dev
          <span className="bg-[#181818] dark:bg-[#ffffff] text-[#ffffff] dark:text-[#181818] px-[6px] ml-1  leading-normal rounded-md">
              canvas
          </span>
      </Link>
  )
}

export {Logo}