import Slider from '../components/Slider'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Announcement></Announcement>
        <Navbar></Navbar>
        <Slider></Slider>
        <Categories></Categories>
        <Products></Products>
        <Newsletter></Newsletter>
        <Footer></Footer>
    </div>
  )
}

export default Home