import styles from './Skills.module.css'

import { LuBrain } from "react-icons/lu";
import { FcLinux } from "react-icons/fc";
import { FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaDocker, FaPython } from "react-icons/fa";

const Skills = () => {
    return (
        <div id='skills' className={styles.skills_container}>
            <p className="subtext"><LuBrain />Minhas tecnologias</p>
            <h2>Habilidades</h2>
            <div className={styles.skills_card}>
                <ul>
                    <li>
                        <FaNodeJs color='#66CC33' size={50} />
                        <span>Node JS</span>
                    </li>
                    <li>
                        <FcLinux size={50} />
                        <span>Linux</span>
                    </li>
                    <li>
                        <FaReact color='#61DBFB' size={50} />
                        <span>React JS</span>
                    </li>
                    <li>
                        <FaHtml5 color='#F06529' size={50} />
                        <span>HTML5</span>
                    </li>
                    <li>
                        <FaCss3Alt color='#2965f1' size={50} />
                        <span>CSS3</span>
                    </li>
                    <li>
                        <FaDocker color='#0DB7ED' size={50} />
                        <span>Docker</span>
                    </li>
                    <li>
                        <FaPython size={50} />
                        <span>Python</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Skills