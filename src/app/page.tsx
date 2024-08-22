import Search from './(Search)/page'
import Category from './(Category)/page'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Search />
      <Category />
    </div>
  )
}
