import Header  from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";
import '../home/Home.css'

function Home(){

    return(
        <div className="conHome">
        <Header />
        <Tours/>
        <Footer/>
        </div>
        

    )
}
export default Home;