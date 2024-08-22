import Carousel from './Carousel'
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { loop: true }

export default function Coupon() {
  return (
    <div className="py-4">
      <p className="text-xl font-bold mt-1 mb-2.5 px-4">인기 쿠폰</p>
      <Carousel options={OPTIONS} />
    </div>
  )
}
