import styles from './Navbar.module.css'

import { FiBookOpen, FiMail } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <span>Guilherme Vieira Moraes</span>
        <ul className={styles.nav_list}>
            <li>
                <a href="">Projetos</a>
            </li>
            <li>
                <a href="">Habilidades</a>
            </li>
            <li>
                <a href="">Experiência</a>
            </li>
            <li>
                <a href="">Contato</a>
            </li>
        </ul>
        <div className={styles.navbar_btn_list}>
            <button className={styles.navbar_btn_resumee}><FiBookOpen />Curriculo</button>
            <button className={styles.navbar_btn_mail}><FiMail />Falar comigo</button>
        </div>
    </nav>
  )
}

export default Navbar