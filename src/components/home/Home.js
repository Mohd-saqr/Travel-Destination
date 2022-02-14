import Header  from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";
import db from  '../../data/db.json'
import '../home/Home.css'
import AboutUs from "../about/About";
import TourDetails from '../TourDetails/TourDetails'
import {Routes , Route} from 'react-router-dom'



function Home(){

    return(
        <div className="conHome">
            <Header/>
            <Routes>
          <Route path="/" element={<Tours data={db}/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/city/:key" element={<TourDetails data={db} />} />


          
          </Routes>
        
        <Footer/>
        
        </div>
        

    )
}
export default Home;