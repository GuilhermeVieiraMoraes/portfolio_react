import ProjectCard from '../../components/ProjectCard';
import styles from './Projects.module.css'

import { FiBriefcase } from "react-icons/fi";

const Projects = () => {
  return (
    <div className={styles.projects}>
        <p><FiBriefcase /> Trabalhos selecionados</p>
        <h2 className={styles.grotesk}>Projetos</h2>
        <div className={styles.card_container}>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    </div>
  )
}

export default Projects