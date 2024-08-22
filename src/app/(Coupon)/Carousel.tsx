'use client'

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { usePrevNextButtons } from '../../components/CarouselArrow'
import useEmblaCarousel from 'embla-carousel-react'
import Image, { StaticImageData } from 'next/image'
import chevron_right from '../../public/icons/chevron_right.png'
import Container from './Container'
import { useDummyDataStore } from '@/store/useDummyDataStore'

interface PropType {
  options?: EmblaOptionsType
}

export default function CarouselBanner(props: PropType) {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { onNextButtonClick } = usePrevNextButtons(emblaApi)

  //   TODO: 여기서 어차피 길이 계산하려면 coupons불러야 하는데.. Container에서는 가져오지 말고 여기서 내려줄까?
  const coupons = useDummyDataStore((state) => state.coupons)

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
    </section>
  )
}
