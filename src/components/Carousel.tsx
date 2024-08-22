import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { usePrevNextButtons } from './CarouselArrow'
import useEmblaCarousel from 'embla-carousel-react'
import Image, { StaticImageData } from 'next/image'
import chevron_right from '../../public/icons/chevron_right.png'

type BannerType = {
  image: StaticImageData
  title: string
}

type PropType = {
  slides: BannerType[]
  options?: EmblaOptionsType
}

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { onNextButtonClick } = usePrevNextButtons(emblaApi)

  return (
    <section className="max-w-4xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {slides.map((slide, index) => (
            <div
              className="flex justify-center translate-x-0 translate-y-0 flex-[0_0_345px] relative"
              key={index}
            >
              {/* TODO: Image로 바꾸기, 화질저하 개선 */}
              <img
                src={slide.image.src}
                alt={slide.title}
                className="w-[335px] h-[125px]"
              />
              {/* TODO: 현재 슬라이드에만 인덱스 보이도록 */}
              <div className="absolute bottom-0 right-[5px] bg-[rgba(48,52,65,0.75)] w-[60px] h-6 rounded-tl-lg rounded-br-lg flex justify-center items-center pl-1">
                <p className="text-white text-xs mr-2">
                  <span className="font-bold">{index + 1}</span> /{' '}
                  {slides.length}
                </p>
                <Image
                  src={chevron_right}
                  alt="..."
                  onClick={onNextButtonClick}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Carousel
