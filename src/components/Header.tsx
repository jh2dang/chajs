import Image from 'next/image'
import minilogo from '../../public/icons/minilogo.png'
import bell from '../../public/icons/bell.png'
import arrow from '../../public/icons/arrow.png'

export default function Header() {
  return (
    <div className="h-[56px] flex justify-between items-center p-4">
      <Image src={minilogo} alt="..." />
      <div className="flex items-center">
        <p className="text-lg font-medium">부산</p>
        <Image src={arrow} alt="..." className="w-[18px] h-[18px]" />
      </div>
      {/* TODO: 크기 맞추기 */}
      <div className="flex relative">
        <Image src={bell} alt="..." />
        <div className="w-1.5"></div>
        <div className="w-1.5 h-1.5 bg-red-500 rounded-full absolute left-[21px]"></div>
      </div>
    </div>
  )
}
