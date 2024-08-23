import Image from 'next/image'
import chevron_up from '../../../public/icons/chevron_up.png'

export default function Privacy() {
  return (
    <div className="flex flex-col py-[21px] px-4 gap-[5px] text-[#737373]">
      {/* 이용약관 ~ */}
      <div className="flex gap-[20px] text-sm justify-center pb-2.5">
        <p>이용약관</p>
        <p className="font-bold">개인정보처리방침</p>
        <p>사업자정보</p>
      </div>

      {/* 차자스는 ~ */}
      <p className="text-xs leading-[18px] text-center">
        차자스는 통신판매중개사로 거래 당사자가 아니므로, 판매자가 등록한
        상품정보 및 거래 등에 대해 책임을 지지 않습니다. 단, 차자스가 판매자로
        등록 판매한 상품은 판매자로서 책임을 부담합니다.
      </p>

      {/* 버튼 */}
      <button className="leading-[24px] flex justify-center items-center gap-[5px] text-[15px] font-bold text-[#303441] border border-[#DCE0E5] py-2 rounded-xl my-3">
        차자스 사업자 정보
        <Image src={chevron_up} alt="..." width={16} height={16} />
      </button>

      {/* 상호 ~ */}
      <div className="text-xs tracking-tighter leading-[18px] flex gap-1">
        <div className="flex flex-col w-[25%]">
          <p>상호</p>
          <p>대표자</p>
          <p>주소</p>
          <p>사업자등록번호</p>
          <p>통신판매업신고</p>
          <p>호스팅사업자</p>
        </div>
        <div className="flex flex-col w-[75%]">
          <p>차자스</p>
          <p>김민석</p>
          <p>부산광역시 북구 만덕대로 134</p>
          <p>123-45-67890</p>
          <p>제0000-땡땡땡땡-1234호</p>
          <p>땡땡땡</p>
        </div>
      </div>
    </div>
  )
}
