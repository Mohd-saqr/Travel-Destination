import '../header/Header.css'

function Header (){
    return(
<div className='con'>

<h1 className='h1'>WELCOME TO Travel-Destination WEBSITE</h1>

<nav className='nav'>
    
    <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>ABOUT</a></li>
        <li><a href='#'>LOGIN</a></li>
    </ul>
</nav>
</div>
    );
}

export default Header;