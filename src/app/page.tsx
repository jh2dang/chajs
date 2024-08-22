import Search from './(Search)/page'
import Category from './(Category)/page'
import Banner from './(Banner)/page'
import Coupon from './(Coupon)/page'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Search />
      <Category />
      <Banner />
      <Coupon />
    </div>
  )
}
