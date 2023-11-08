import Image from "next/image";

const Description = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`rounded-md p-2`}>
        <Image src={icon ?? "/homePageIcon.png"} alt="icon" width={120} height={120} />
      </div>
      <h1 className="text-[80px] font-bold">{title}</h1>
      <p className="text-[24px] font-normal">{description}</p>
    </div>
  )
}

export {Description}