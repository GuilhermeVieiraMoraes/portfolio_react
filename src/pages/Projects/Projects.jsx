import ProjectCard from '../../components/ProjectCard';
import styles from './Projects.module.css'

import { FiBriefcase } from "react-icons/fi";

const Projects = () => {
  return (
    <div id='projects' className={styles.projects}>
        <p className='subtext'><FiBriefcase /> Trabalhos selecionados</p>
        <h2>Projetos</h2>
        <div className={styles.card_container}>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    </div>
  )
}

export default Projects