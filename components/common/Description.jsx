import Image from "next/image";

const Description = ({title,description}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src="/homePageIcon.png" alt="icon" width={120} height={120}/>
      <h1 className="text-[80px] font-bold">{title}</h1>
      <p className="text-[24px] font-normal">{description}</p>
    </div>
  )
}

export {Description}