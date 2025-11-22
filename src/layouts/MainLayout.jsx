import { Outlet } from 'react-router'
import Navbar from '../Comeponents/Navbar/Navbar'
import Footer from '../Comeponents/Footer/Footer'
const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='pt-24 min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div>
      <Footer></Footer>
     
    </div>
  )
}

export default MainLayout
