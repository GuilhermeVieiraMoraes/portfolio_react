import styles from './Footer.module.css';

import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footer_content}>
            <p>&copy;2026 Guilherme Vieira Moraes. Feito com React. </p>
            <Link className={styles.btn_top} to="introduction" smooth={true} duration={500}>Voltar ao topo</Link>
        </div>
    </footer>
  )
}

export default Footer