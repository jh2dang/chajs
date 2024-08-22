'use client'

import Carousel from '../../components/Carousel'
import { useDummyDataStore } from '@/store/useDummyDataStore'
import { EmblaOptionsType } from 'embla-carousel'

// 옵션 설정
const OPTIONS: EmblaOptionsType = { loop: true }

// 슬라이드 개수 설정
const SLIDE_COUNT = 3

export default function Banner() {
  const banners = useDummyDataStore((state) => state.banners)
  return (
    <div className="py-4">
      <Carousel slides={banners} options={OPTIONS} />
    </div>
  )
}
