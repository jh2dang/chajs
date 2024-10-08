'use client'

import { useRef } from 'react'
import { useDummyDataStore } from '../../store/useDummyDataStore'
import CategoryBadge from './Badge'

export default function CategoryCarousel() {
  const categories = useDummyDataStore((state) => state.categories)

  // 스와이프 기능
  const carouselRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    const carousel = carouselRef.current
    if (!carousel) return

    const startX = e.pageX - carousel.offsetLeft
    const scrollLeft = carousel.scrollLeft

    const handleMouseMove = (event: MouseEvent) => {
      const x = event.pageX - carousel.offsetLeft
      const walk = (x - startX) * 1.5
      carousel.scrollLeft = scrollLeft - walk
    }

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
  }

  return (
    <div
      className="overflow-x-auto"
      ref={carouselRef}
      onMouseDown={handleMouseDown}
    >
      <div className="flex flex-row flex-wrap pl-4 w-[450px] gap-x-[5px] gap-y-[10px] cursor-pointer">
        {categories.map((category, index) => (
          <CategoryBadge
            key={index}
            image={category.image}
            title={category.title}
          />
        ))}
      </div>
    </div>
  )
}
