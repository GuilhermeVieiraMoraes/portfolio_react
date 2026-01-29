import styles from './Introduction.module.css'
import { GoArrowUpRight } from "react-icons/go";
import { FiCopy, FiGithub, FiLinkedin } from "react-icons/fi";

const Introduction = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.title_container}>
                    <h1 className={styles.grotesk}>Desenvolvedor Frontend</h1>
                    <h1 className={styles.gradient_text}>Guilherme Vieira Moraes</h1>
                    <p className={styles.subtext}>Eu crio interfaces rápidas, bonitas e acessíveis — com atenção obsessiva ao detalhe e às micro-interações.</p>
                </div>
                <div className={styles.btn_list}>
                    <button className='btn'>Ver projetos <GoArrowUpRight /></button>
                    <button className='btn'>Contato</button>
                    <button className='btn'><FiCopy />Copiar email</button>
                </div>
                <div className={styles.title_socials}>
                    <button className='btn'><FiGithub />GitHub</button>
                    <button className='btn'><FiLinkedin />LinkedIn</button>
                </div>
            </div>
            <div className={styles.about}>
                <h2>Sobre mim</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis magni quasi ipsam architecto at eum! In, molestiae. Velit voluptates assumenda distinctio corporis saepe cumque? Nemo qui temporibus hic iure. Qui.</p>
            </div>
        </>
    )
}

export default Introduction