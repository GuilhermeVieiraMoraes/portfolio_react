import styles from './Contact.module.css';

import { FiMail } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";

import { useState } from 'react';

import emailjs from '@emailjs/browser';


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        const templateParams = {
            name: name,
            message: message,
            email: email
        };
        emailjs.send('service_77t4ct7','template_zorpela', templateParams, 'udj_zVa4tOSIoUX5H').then((res) => {
            console.log('Email enviado', res.status, res.text)
            setName('')
            setEmail('')
            setMessage('')
        }, (err) =>{
            console.log('ERRO: ', err)
        });
        
    }

    return (
        <div id='contact' className={styles.contact}>
            <p className='subtext'><FiMail /> Vamos conversar</p>
            <h2>Contato</h2>

            <div className={styles.contact_card}>
                <p>Envie uma mensagem</p>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Seu nome</span>
                        <input type="text" placeholder='Digite seu nome' onChange={(e) => setName(e.target.value)} value={name} required />
                    </label>
                    <label>
                        <span>Seu email</span>
                        <input type="email" placeholder='Digite seu email' onChange={(e) => setEmail(e.target.value)} value={email} required />
                    </label>
                    <label>
                        <span>Mensagem</span>
                        <textarea name="textarea" placeholder='Digite sua mensagem...' onChange={(e) => setMessage(e.target.value)} value={message} required></textarea>
                    </label>
                    <button className='btn_accent'>Enviar <GoArrowUpRight /></button>
                </form>
            </div>
        </div>
    )
}

export default Contact