import Image, { StaticImageData } from 'next/image'

interface Coupon {
  image: StaticImageData
  title: string
  category: string
  description: string
  endDate: string
  case: string
  quantity: number
  isRecieved: boolean
  isEnded: boolean
}

interface CardProps {
  coupon: Coupon
}

export default function Card({ coupon }: CardProps) {
  return (
    <div className="flex flex-col w-[174px] h-[254px] rounded-2xl border border-1 border-[#EEF1F4]">
      {/* Header */}
      <div className="h-[100px] relative">
        <Image
          src={coupon.image}
          alt={coupon.title}
          fill
          className="object-cover rounded-t-2xl"
        />
      </div>

      {/* Body */}
      <div className="px-2 flex flex-col">
        <p>{coupon.title}</p>
        <p>{coupon.case}</p>
        <p>{coupon.description}</p>
        <p>{coupon.endDate}</p>
        <p>
          <span>{coupon.quantity}</span> , <span>{coupon.endDate}</span>
        </p>
      </div>
    </div>
  )
}
