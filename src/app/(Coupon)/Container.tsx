'use client'

import Card from './Card'

import { useDummyDataStore } from '@/store/useDummyDataStore'

interface ContainerProps {
  index: number
}

export default function Container({ index }: ContainerProps) {
  const coupons = useDummyDataStore((state) => state.coupons)

  const startIndex = index * 4
  const selectedCoupons = coupons.slice(startIndex, startIndex + 4)

  return (
    <div className="flex flex-row flex-wrap justify-center gap-2.5">
      {selectedCoupons.map((coupon, index) => (
        <Card key={index} coupon={coupon} />
      ))}
    </div>
  )
}
