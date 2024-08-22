import { create } from 'zustand'

import { StaticImageData } from 'next/image'
import truck from '../../public/icons/truck.png'
import build_fill from '../../public/icons/build_fill.png'
import internet from '../../public/icons/internet.png'
import phone from '../../public/icons/phone.png'
import ic_house from '../../public/icons/ic_house.png'
import business_center from '../../public/icons/business_center.png'
import car from '../../public/icons/car.png'
import coffee_maker from '../../public/icons/coffee_maker.png'
import restaurant from '../../public/icons/restaurant.png'
import health_Safety from '../../public/icons/health_Safety.png'

import banner1 from '../../public/icons/banner1.png'
import banner2 from '../../public/icons/banner2.png'
import banner3 from '../../public/icons/banner3.png'

interface Data {
  image: StaticImageData
  title: string
}

interface Card {
  title: string
  catrgory: string
  description: string
  endDate: string
  case: string
  quantity: number
  isRecieved: boolean
  isEnded: boolean
}

interface DummyDataState {
  categories: Data[]
  banners: Data[]
  coupons: Card[]
}

export const useDummyDataStore = create<DummyDataState>(() => ({
  categories: [
    { image: truck, title: '이사/청소' },
    { image: build_fill, title: '설치/수리' },
    { image: internet, title: '인터넷가입' },
    { image: phone, title: '모바일' },
    { image: ic_house, title: '부동산' },
    { image: business_center, title: '외주' },
    { image: car, title: '자동차' },
    { image: coffee_maker, title: '렌탈' },
    { image: restaurant, title: '음식점' },
    { image: health_Safety, title: '보험' },
  ],
  banners: [
    { image: banner1, title: '배너 1' },
    { image: banner2, title: '배너 2' },
    { image: banner3, title: '배너 3' },
  ],
  coupons: [
    {
      title: '하우스멜',
      catrgory: '카페·디저트',
      description: '소금빵 증정',
      endDate: '2024년 05월 31일까지',
      case: '리뷰작성 시',
      quantity: 0,
      isRecieved: true,
      isEnded: false,
    },
    {
      title: '잭슨피자 광안리점',
      catrgory: '피자',
      description: '오븐스파게티 증정',
      endDate: '-',
      case: '리뷰작성 시',
      quantity: 25,
      isRecieved: false,
      isEnded: false,
    },
    {
      title: '오만원더통신',
      catrgory: '인터넷가입',
      description: '사은품 추가 증정',
      endDate: '2024년 05월 31일까지',
      case: '리뷰작성 시',
      quantity: 5,
      isRecieved: false,
      isEnded: false,
    },
    {
      title: '이가요리족보야 경성대본점',
      catrgory: '족발·보쌈',
      description: '탄산음료 1병 무료',
      endDate: '2024년 05월 31일까지',
      case: '구매 시',
      quantity: 0,
      isRecieved: true,
      isEnded: true,
    },
  ],
}))
