'use client'

import CarouselBanner from './Carousel'
import { useDummyDataStore } from '@/store/useDummyDataStore'
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { loop: true }

export default function Banner() {
  const banners = useDummyDataStore((state) => state.banners)
  return (
    <div className="py-4">
      <CarouselBanner slides={banners} options={OPTIONS} />
    </div>
  )
}
