import styles from './Introduction.module.css'

// icons
import { GoArrowUpRight } from "react-icons/go";
import { FiCopy, FiGithub, FiLinkedin } from "react-icons/fi";

const email = 'guilherme.vmoraesdev@gmail.com';

const Introduction = () => {
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
        } catch (error) {
            console.log('Erro ao copiar', error)
        }
    }

    return (
        <>
            <div id='introduction' className={styles.container}>
                <div className={styles.title_container}>
                    <h1 className={styles.grotesk}>Desenvolvedor Frontend</h1>
                    <h1 className={styles.gradient_text}>Guilherme Vieira Moraes</h1>
                    <p className={styles.subtext}>Eu crio interfaces rápidas, bonitas e acessíveis — com atenção obsessiva ao detalhe e às micro-interações.</p>
                </div>
                <div className={styles.btn_list}>
                    <button className='btn'>Ver projetos <GoArrowUpRight /></button>
                    <button className='btn'>Contato</button>
                    <button className='btn' onClick={handleCopy}><FiCopy />Copiar email</button>
                </div>
                <div className={styles.title_socials}>
                    <a
                        href='https://github.com/GuilhermeVieiraMoraes'
                        target='_blank'
                        rel='noreferrer'
                        className='btn'><FiGithub />GitHub</a>
                    <a
                        href='https://www.linkedin.com/in/guilherme-vm/'
                        target='_blank'
                        rel='noreferrer'
                        className='btn'><FiLinkedin />LinkedIn</a>
                </div>
            </div>
            <div className={styles.about}>
                <h2>Sobre mim</h2>
                <div className={styles.about_text}>
                    <p>Sou desenvolvedor focado em construir aplicações web eficientes, escaláveis e seguras. Tenho maior familiaridade com JavaScript no ecossistema Node.js e React, além de experiência com Python para soluções backend e automação.</p>
                    
                    <p>Trabalho com APIs REST utilizando Express, versionamento com Git, ambientes Linux e conteinerização com Docker, sempre buscando boas práticas de arquitetura e performance. No front-end, utilizo HTML5 e CSS3 para criar interfaces limpas e responsivas.</p>
                    
                    <p>Tenho atenção especial à segurança, aplicando autenticação com JWT e medidas de proteção contra XSS e CSRF, garantindo aplicações mais confiáveis e robustas.</p>
                </div>
            </div>
        </>
    )
}

export default Introduction