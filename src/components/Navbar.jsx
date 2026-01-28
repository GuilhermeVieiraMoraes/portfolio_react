import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <span>Guilherme Vieira Moraes</span>
        <ul>
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
        <div>
            <button>Curriculo</button>
            <button>Falar comigo</button>
        </div>
    </nav>
  )
}

export default Navbar