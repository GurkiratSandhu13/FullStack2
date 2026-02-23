import './navBar.css'
import './sub-components/about'
import './sub-components/contact'
import './sub-components/home'
function NavBar() {
    return(
        <div className="navBar">
            <ul>
            <li onClick={() => setCurrentPage('home')}>Home</li>
            <li onClick={() => setCurrentPage('about')}>About</li>
            <li onClick={() => setCurrentPage('contact')}>Contact</li>
            </ul>
        </div>
    )
}
export default NavBar