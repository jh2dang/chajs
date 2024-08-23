'use client'

import React, { useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { usePrevNextButtons } from '../../components/CarouselArrow'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Container from './Container'
import { useDummyDataStore } from '@/store/useDummyDataStore'
import ic_left from '../../../public/icons/ic_left.png'
import ic_right from '../../../public/icons/ic_right.png'

interface PropType {
  options?: EmblaOptionsType
}

export default function CarouselBanner(props: PropType) {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

  //   TODO: 여기서 어차피 길이 계산하려면 coupons불러야 하는데.. Container에서는 가져오지 말고 여기서 내려줄까?
  const coupons = useDummyDataStore((state) => state.coupons)

  const [currentIndex, setCurrentIndex] = useState(1)
  const [totalSlides, setTotalSlides] = useState(0)

  useEffect(() => {
    if (emblaApi) {
      setTotalSlides(Math.ceil(coupons.length / 4))
      emblaApi.on('select', () => {
        setCurrentIndex(emblaApi.selectedScrollSnap() + 1)
      })
    }
  }, [emblaApi, coupons.length])

  return (
    <section className="max-w-4xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {Array(Math.ceil(coupons.length / 4))
            .fill(0)
            .map((_, index) => (
              <div key={index} className="flex-[0_0_100%]">
                <Container index={index} />
              </div>
            ))}
        </div>
      </div>

      {/* 이전, 다음 버튼 */}
      <div className="flex px-[76.5px] justify-center items-center gap-[50px] mt-4">
        <button
          className="w-[54px] h-9 border border-[#DCE0E5] border-[0.5px] rounded-lg flex justify-center items-center"
          onClick={onPrevButtonClick}
        >
          <Image src={ic_left} alt="이전" width={24} height={24} />
        </button>
        <div className="flex gap-1 w-[32px]">
          <span className="text-[15px] font-medium leading-6 w-[9px]">
            {currentIndex}
          </span>
          /
          <span className="text-[15px] font-medium text-[#303441] text-opacity-50 leading-6 w-[9px]">
            {totalSlides}
          </span>
        </div>
        <button
          className="w-[54px] h-9 border border-[#DCE0E5] border-[0.5px] rounded-lg flex justify-center items-center"
          onClick={onNextButtonClick}
        >
          <Image src={ic_right} alt="다음" width={24} height={24} />
        </button>
      </div>
    </section>
  )
}
