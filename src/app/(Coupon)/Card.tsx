'use client'

import Image, { StaticImageData } from 'next/image'
import Union from '../../../public/icons/Union.png'
import { useDummyDataStore } from '@/store/useDummyDataStore'

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
  const setIsRecieved = useDummyDataStore((state) => state.setIsRecieved)

  const handleButtonClick = () => {
    if (!coupon.isRecieved && !coupon.isEnded) {
      setIsRecieved(coupon.title)
      alert('쿠폰이 발급되었습니다. 쿠폰함을 확인해 주세요.')
    }
  }

  return (
    <div className="flex flex-col w-[174px] h-[254px] rounded-2xl border border-1 border-[#EEF1F4]">
      {/* 카드 헤더(사진부분) */}
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
        {/* 타이틀 */}
        <div className="py-2 flex gap-[5px]">
          <Image
            src={coupon.image}
            alt={coupon.title}
            width={21}
            height={21}
            className="rounded-full border border-[0.5px] border-[#EEF1F4]"
          />
          <p className="font-bold text-[13px] truncate overflow-hidden text-ellipsis whitespace-nowrap tracking-tighter">
            {coupon.title}
          </p>
          <span className="text-[#737373] text-[13px] text-nowrap tracking-tighter">
            {coupon.category}
          </span>
        </div>

        {/* 리뷰 작성시~ */}
        <div className="pb-2 flex flex-col gap-[5px]">
          <div>
            <p className="text-[#0066FF] text-[13px] tracking-tighter">
              {coupon.case}
            </p>
            <p className="text-[15px] font-bold">{coupon.description}</p>
          </div>

          <p className="flex text-[10px] text-[#737373] leading-[10px]">
            {coupon.quantity > 0 && !coupon.isRecieved && !coupon.isEnded ? (
              <span>
                <span className="font-bold">{coupon.quantity}</span>장 남음
              </span>
            ) : (
              '\u00A0'
            )}
            {coupon.quantity > 0 &&
              !coupon.isRecieved &&
              coupon.endDate &&
              ' ・ '}
            {(coupon.endDate && `${coupon.endDate}`) || '\u00A0'}
          </p>
        </div>

        {/* Button */}
        <button
          className="mt-[5px] bg-[#EEF1F4] h-[30px] rounded"
          onClick={handleButtonClick}
          disabled={coupon.isRecieved || coupon.isEnded}
        >
          {coupon.isRecieved ? (
            <p className="text-xs font-medium text-[#303441] text-opacity-25 py-1.5 tracking-tighter flex justify-center leading-[18px]">
              이미 받음
            </p>
          ) : coupon.isEnded ? (
            <p className="text-xs font-medium text-[#303441] text-opacity-25 py-1.5 tracking-tighter flex justify-center leading-[18px]">
              마감
            </p>
          ) : (
            <p className="flex gap-1 items-center text-xs font-medium text-[#0066FF] py-1.5 tracking-tighter flex justify-center leading-[18px]">
              <Image
                src={Union}
                alt="..."
                width={13}
                height={13}
                className="w-[13px] h-[13px]"
              />
              쿠폰 받기
            </p>
          )}
        </button>
      </div>
    </div>
  )
}
