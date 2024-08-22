'use client'

import { useDummyDataStore } from '../../store/useDummyDataStore'
import CategoryBadge from '../../components/CategoryBadge'

export default function Category() {
  const categories = useDummyDataStore((state) => state.categories)
  return (
    <div className="overflow-x-auto">
      <div className="flex flex-row flex-wrap pl-4 w-[450px] gap-x-[5px] gap-y-[10px]">
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
