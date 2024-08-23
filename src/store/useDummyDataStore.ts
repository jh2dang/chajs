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

import coupon1 from '../../public/icons/coupon1.png'
import coupon2 from '../../public/icons/coupon2.png'
import coupon3 from '../../public/icons/coupon3.png'
import coupon4 from '../../public/icons/coupon4.png'

interface Data {
  image: StaticImageData
  title: string
}

interface Card {
  image: StaticImageData
  title: string
  category: string
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
  setIsRecieved: (title: string) => void
}

export const useDummyDataStore = create<DummyDataState>((set) => ({
  setIsRecieved: (title: string) =>
    set((state) => ({
      coupons: state.coupons.map((coupon) =>
        coupon.title === title ? { ...coupon, isRecieved: true } : coupon,
      ),
    })),
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
      image: coupon1,
      title: '하우스멜',
      category: '카페·디저트',
      description: '소금빵 증정',
      endDate: '2024년 05월 31일까지',
      case: '리뷰작성 시',
      quantity: 0,
      isRecieved: true,
      isEnded: false,
    },
    {
      image: coupon2,
      title: '잭슨피자 광안리점',
      category: '피자',
      description: '오븐스파게티 증정',
      endDate: '',
      case: '리뷰작성 시',
      quantity: 25,
      isRecieved: false,
      isEnded: false,
    },
    {
      image: coupon3,
      title: '오만원더통신',
      category: '인터넷가입',
      description: '사은품 추가 증정',
      endDate: '2024년 05월 31일까지',
      case: '리뷰작성 시',
      quantity: 5,
      isRecieved: false,
      isEnded: false,
    },
    {
      image: coupon4,
      title: '이가요리족보야 경성대본점',
      category: '족발·보쌈',
      description: '탄산음료 1병 무료',
      endDate: '2024년 05월 31일까지',
      case: '구매 시',
      quantity: 0,
      isRecieved: true,
      isEnded: true,
    },
    {
      image: coupon1,
      title: '22 하우스멜2',
      category: '카페·디저트',
      description: '소금빵 증정',
      endDate: '2024년 05월 31일까지',
      case: '리뷰작성 시',
      quantity: 0,
      isRecieved: true,
      isEnded: false,
    },
    {
      image: coupon2,
      title: '22 잭슨피자 광안리점2',
      category: '피자',
      description: '오븐스파게티 증정',
      endDate: '',
      case: '리뷰작성 시',
      quantity: 25,
      isRecieved: false,
      isEnded: false,
    },
    {
      image: coupon3,
      title: '22 오만원더통신2',
      category: '인터넷가입',
      description: '사은품 추가 증정',
      endDate: '2024년 05월 31일까지',
      case: '리뷰작성 시',
      quantity: 5,
      isRecieved: false,
      isEnded: false,
    },
    {
      image: coupon4,
      title: '22 이가요리족보야 경성대본점2',
      category: '족발·보쌈',
      description: '탄산음료 1병 무료',
      endDate: '2024년 05월 31일까지',
      case: '구매 시',
      quantity: 0,
      isRecieved: true,
      isEnded: true,
    },
    {
      image: coupon1,
      title: '33 하우스멜3',
      category: '카페·디저트',
      description: '소금빵 증정',
      endDate: '2024년 05월 31일까지',
      case: '리뷰작성 시',
      quantity: 0,
      isRecieved: true,
      isEnded: false,
    },
    {
      image: coupon2,
      title: '33 잭슨피자 광안리점3',
      category: '피자',
      description: '오븐스파게티 증정',
      endDate: '',
      case: '리뷰작성 시',
      quantity: 25,
      isRecieved: false,
      isEnded: false,
    },
    {
      image: coupon3,
      title: '33 오만원더통신3',
      category: '인터넷가입',
      description: '사은품 추가 증정',
      endDate: '2024년 05월 31일까지',
      case: '리뷰작성 시',
      quantity: 5,
      isRecieved: false,
      isEnded: false,
    },
    {
      image: coupon4,
      title: '33 이가요리족보야 경성대본점3',
      category: '족발·보쌈',
      description: '탄산음료 1병 무료',
      endDate: '2024년 05월 31일까지',
      case: '구매 시',
      quantity: 0,
      isRecieved: true,
      isEnded: true,
    },
    {
      image: coupon1,
      title: '44 하우스멜4',
      category: '카페·디저트',
      description: '소금빵 증정',
      endDate: '2024년 05월 31일까지',
      case: '리뷰작성 시',
      quantity: 0,
      isRecieved: true,
      isEnded: false,
    },
    {
      image: coupon2,
      title: '44 잭슨피자 광안리점4',
      category: '피자',
      description: '오븐스파게티 증정',
      endDate: '',
      case: '리뷰작성 시',
      quantity: 25,
      isRecieved: false,
      isEnded: false,
    },
    {
      image: coupon3,
      title: '44 오만원더통신4',
      category: '인터넷가입',
      description: '사은품 추가 증정',
      endDate: '2024년 05월 31일까지',
      case: '리뷰작성 시',
      quantity: 5,
      isRecieved: false,
      isEnded: false,
    },
    {
      image: coupon4,
      title: '44 이가요리족보야 경성대본점4',
      category: '족발·보쌈',
      description: '탄산음료 1병 무료',
      endDate: '2024년 05월 31일까지',
      case: '구매 시',
      quantity: 0,
      isRecieved: true,
      isEnded: true,
    },
    {
      image: coupon1,
      title: '55 하우스멜5',
      category: '카페·디저트',
      description: '소금빵 증정',
      endDate: '2024년 05월 31일까지',
      case: '리뷰작성 시',
      quantity: 0,
      isRecieved: true,
      isEnded: false,
    },
    {
      image: coupon2,
      title: '55 잭슨피자 광안리점5',
      category: '피자',
      description: '오븐스파게티 증정',
      endDate: '',
      case: '리뷰작성 시',
      quantity: 25,
      isRecieved: false,
      isEnded: false,
    },
    {
      image: coupon3,
      title: '55 오만원더통신5',
      category: '인터넷가입',
      description: '사은품 추가 증정',
      endDate: '2024년 05월 31일까지',
      case: '리뷰작성 시',
      quantity: 5,
      isRecieved: false,
      isEnded: false,
    },
    {
      image: coupon4,
      title: '55 이가요리족보야 경성대본점5',
      category: '족발·보쌈',
      description: '탄산음료 1병 무료',
      endDate: '2024년 05월 31일까지',
      case: '구매 시',
      quantity: 0,
      isRecieved: true,
      isEnded: true,
    },
  ],
}))
