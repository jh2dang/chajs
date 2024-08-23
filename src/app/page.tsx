import Search from './(Search)/Search'
import Category from './(Category)/Category'
import Banner from './(Banner)/Banner'
import Coupon from './(Coupon)/Coupon'
import Privacy from './(Privacy)/Privacy'

export default function Home() {
  return (
    <div className="flex flex-col pt-[56px] pb-[83px]">
      <Search />
      <Category />
      <Banner />
      <Coupon />
      <Privacy />
    </div>
  )
}
