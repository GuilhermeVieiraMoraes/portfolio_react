import styles from './Navbar.module.css';

import { FiBookOpen, FiMail } from "react-icons/fi";

import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Link className={styles.logo} to="introduction" smooth={true} duration={500}>Guilherme Vieira Moraes</Link>
        <ul className={styles.nav_list}>
            <li>
                <Link to="projects" smooth={true} duration={500}>Projetos</Link>
            </li>
            <li>
                <Link to="skills" smooth={true} duration={500}>Habilidades</Link>
            </li>
            <li>
                <Link to="contact" smooth={true} duration={500}>Contato</Link>
            </li>
        </ul>
        <div className={styles.navbar_btn_list}>
            <a
            href='/portfolio_react/curriculo.pdf'
            download
            className={styles.navbar_btn_resumee}><FiBookOpen />Curriculo</a>
            <button className={styles.navbar_btn_mail}><FiMail />Falar comigo</button>
        </div>
    </nav>
  )
}

export default Navbar