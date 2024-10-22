import { Link } from "react-router-dom"
import './index.css'

const Home  = () => {
    return <div className="home-page" >
       <h1>Trying out React Three Fiber scroll animations</h1>
        <p><Link to={'/scroll-animation'}>Scroll Animation</Link></p>
        <p><Link to={'/carousel-animation'}>Carousel Animation</Link></p>
    </div>
}
export default Home