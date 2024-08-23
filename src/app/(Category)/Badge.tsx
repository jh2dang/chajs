import Image, { StaticImageData } from 'next/image'

interface Data {
  image: StaticImageData
  title: string
}

export default function CategoryBadge({ image, title }: Data) {
  return (
    <div className="flex flex-col justify-center items-center w-[80px] h-[91px]">
      <div className="flex justify-center items-center">
        <div className="pt-2 pb-2.5">
          <Image src={image} alt="..." />
        </div>
      </div>
      <p className="text-sm">{title}</p>
    </div>
  )
}
