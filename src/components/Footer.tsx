import home from '../../public/icons/home.png'
import request from '../../public/icons/request.png'
import chat from '../../public/icons/chat.png'
import user from '../../public/icons/user.png'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="h-[62px] flex justify-between items-center pt-1 px-4 pb-2.5 fixed bottom-0">
      <div className="w-[83.5px] h-12 flex flex-col items-center justify-between">
        <Image src={home} width={24} alt="..." />
        <p className="font-medium text-[#0066FF] text-[10px] leading-[10px] tracking-tighter">
          홈
        </p>
      </div>
      <div className="w-[83.5px] h-12 flex flex-col items-center justify-between">
        <Image src={request} width={24} alt="..." />
        <p className="font-medium text-[#737373] text-[10px] leading-[10px] tracking-tighter">
          요청 내역
        </p>
      </div>
      <div className="w-[83.5px] h-12 flex flex-col items-center justify-between">
        <Image src={chat} width={24} alt="..." />
        <p className="font-medium text-[#737373] text-[10px] leading-[10px] tracking-tighter">
          채팅
        </p>
      </div>
      <div className="w-[83.5px] h-12 flex flex-col items-center justify-between">
        <Image src={user} width={24} alt="..." />
        <p className="font-medium text-[#737373] text-[10px] leading-[10px] tracking-tighter">
          내 정보
        </p>
      </div>
    </div>
  )
}
