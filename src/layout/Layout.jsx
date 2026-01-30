import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="min-h-screen bg-deep-black">
      {/* Logo */}
      <div className="flex-shrink-0">
            <a href="#" className="text-2xl lg:text-3xl font-bold text-white first-letter:text-spotify-green  hover:text-spotify-green transition-colors">
                Insura
            </a>
      </div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout