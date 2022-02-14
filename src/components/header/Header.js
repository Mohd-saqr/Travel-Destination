import '../header/Header.css'
import { Link } from 'react-router-dom';
function Header (){
    return(
<div className='con'>

<h1 className='h1'>WELCOME TO Travel-Destination WEBSITE</h1>

<nav className='nav'>
    
    <ul>
        <li><Link to="/">Home</Link></li>
        {/* <li><Link to="/city/"> about the city</Link></li> */}
        <li><Link to="/about">about us</Link></li>
    </ul>
</nav>
</div>
    );
}

export default Header;