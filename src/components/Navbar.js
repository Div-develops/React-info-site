import REACTI from '../components/img/logo.png';
import '../components/navbar.css'

export default function Navbar(){
    return(
     
       <nav className="navbar">
        <img src={REACTI} className="logo"/>
        <ul className="ul">
            
        <li min-width="417">React Course-Project 1</li>
        </ul>
       </nav>
      
    )
}