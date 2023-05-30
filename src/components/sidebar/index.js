import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/3d_A.png'
import LogoSubtitle from '../../assets/images/logo_subti.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub, faM} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className = "nav-bar">
        <Link className = 'logo' to ='/'>
            <img src = {LogoS} alt = 'logo'/>
            <img className = "sub-logo" src = {LogoSubtitle} alt = 'logosubtitle'/>
        </Link>
        <nav>
            <NavLink exact = 'true' activeclassname = 'active' to = '/'>
                <FontAwesomeIcon icon = {faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink className= 'about-link' exact = 'true' activeclassname = 'active' to = '/about'>
                <FontAwesomeIcon icon = {faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink className = 'contact-link' exact = 'true' activeclassname = 'active' to = '/contact'>
                <FontAwesomeIcon icon = {faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel = "noreferrer" href="https://www.linkedin.com/in/arjit-srivastava-607164229">
                    <FontAwesomeIcon icon = {faLinkedin} color = "#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel = "noreferrer" href="https://github.com/SrivastavaArjit">
                    <FontAwesomeIcon icon = {faGithub} color = "#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar