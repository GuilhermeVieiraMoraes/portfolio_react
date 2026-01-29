import styles from "./ProjectCard.module.css";

const ProjectCard = () => {
    return (
        <div className={styles.project_card}>
            <h3>Nebula UI</h3>
            <p>Landing de alta conversão com animações suaves e arquitetura de componentes reutilizável.</p>
            <ul className={styles.project_list}>
                <li>
                    Hero com gradientes e glassmorphism
                </li>
                <li>
                    Componentes escaláveis (cards, seções, CTAs)
                </li>
                <li>
                    Acessibilidade e performance como padrão
                </li>
            </ul>
            <div className={styles.project_tags}>
                <span>React</span>
                <span>Tailwind</span>
                <span>Nodejs</span>
            </div>
            <div className={styles.card_btns}>
                <button className="btn_accent">Ver demo</button>
                <button className="btn">Código</button>
            </div>
        </div>
    )
}

export default ProjectCard