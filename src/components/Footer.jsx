import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footer_content}>
            <p>&copy;2026 Guilherme Vieira Moraes. Feito com React. </p>
            <button>Voltar ao topo</button>
        </div>
    </footer>
  )
}

export default Footer