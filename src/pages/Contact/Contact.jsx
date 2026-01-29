import styles from './Contact.module.css';

import { FiMail } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";

const Contact = () => {
    return (
        <div id='contact' className={styles.contact}>
            <p className='subtext'><FiMail /> Vamos conversar</p>
            <h2>Contato</h2>

            <div className={styles.contact_card}>
                <p>Envie uma mensagem</p>
                <form>
                    <label>
                        <span>Seu email</span>
                        <input type="email" placeholder='Digite seu email' required />
                    </label>
                    <label>
                        <span>Mensagem</span>
                        <textarea name="textarea" placeholder='Digite sua mensagem...' required></textarea>
                    </label>
                    <button className='btn_accent'>Enviar <GoArrowUpRight /></button>
                </form>
            </div>
        </div>
    )
}

export default Contact