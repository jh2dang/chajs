import Image from 'next/image'
import search from '../../../public/icons/search.png'

export default function Search() {
  return (
    <div className="flex items-center justify-center py-4 p-[21px] relative">
      {/* TODO: letter-spacing, 글자색상 */}
      <input
        className="py-3 pl-[46px] pr-4 border border-[#0066FF] rounded-md w-full"
        placeholder="쿠폰과 견적은 차자스에서!"
      />
      <Image src={search} alt="..." className="absolute left-[40px]" />
    </div>
  )
}
