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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque, felis eu fringilla sodales, ante justo blandit turpis, at bibendum diam augue vitae tortor. Etiam sagittis leo non scelerisque tempus. Curabitur gravida eget leo a volutpat. Maecenas sodales erat at lacus auctor blandit. Donec blandit ante arcu, nec auctor velit condimentum a. Ut dignissim ipsum non leo fermentum, et semper tortor gravida. Aliquam purus erat, commodo eget efficitur sed, malesuada et ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus urna lacus, consectetur quis tellus et, ultricies pellentesque turpis. Nunc et consequat dui. Donec egestas lacus odio, id consequat neque cursus quis. Donec at facilisis elit, vitae vulputate enim. Vestibulum consectetur orci euismod erat tincidunt malesuada. Mauris pretium pretium lorem, nec finibus lorem eleifend quis. Etiam laoreet molestie vulputate.

Vestibulum sollicitudin luctus nisi et congue. Duis placerat dictum sagittis. Nulla id rhoncus nibh, in commodo velit. Nulla sed ornare enim. In hac habitasse platea dictumst. Fusce mollis imperdiet nibh, quis mattis felis porttitor ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in risus tortor. Phasellus faucibus, diam in rhoncus semper, elit nulla sollicitudin justo, ut interdum massa turpis at mi. Integer ultrices, dui id eleifend consectetur, lorem nisl tempor nisl, ut fringilla turpis massa sed ante. Aenean euismod dolor ac augue eleifend accumsan sed a odio. Nullam congue odio nisi, ut maximus enim lacinia sed. Vestibulum nec massa ligula. Aliquam erat volutpat.

Pellentesque eu dolor iaculis, euismod leo sed, egestas nibh. Suspendisse et dictum purus. Sed leo justo, tincidunt in mauris vitae, eleifend laoreet ipsum. Suspendisse vulputate orci a iaculis venenatis. Vivamus vel varius nisl, eget ullamcorper est. Curabitur accumsan quis nunc et luctus. Vivamus ultrices nisi eget pellentesque elementum. Proin sit amet fermentum dolor. Maecenas laoreet quis est eget iaculis. Vivamus massa tortor, euismod nec bibendum id, tincidunt a risus. Fusce eleifend, tellus venenatis congue bibendum, erat diam laoreet libero, eu finibus lectus odio bibendum ipsum. Ut viverra sapien varius orci fringilla, sit amet placerat mauris sagittis. Maecenas mollis ultricies varius. Nam aliquam gravida vehicula.

Proin porttitor iaculis tempus. Nam sagittis id tortor eu faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet imperdiet enim. Vestibulum at dui convallis, pharetra tortor a, euismod massa. Pellentesque in nibh suscipit, semper erat a, malesuada lacus. Duis malesuada justo sit amet sapien dignissim, non iaculis mauris placerat.

Ut bibendum, urna id ullamcorper dictum, diam lectus feugiat tellus, et rhoncus risus ante lacinia sapien. Pellentesque a enim mi. Pellentesque vel luctus quam. Aliquam a suscipit augue. Quisque vitae semper libero. Nulla nibh arcu, faucibus ut nulla in, pretium tempus felis. Nullam et venenatis massa. Morbi eget odio mi. Integer a placerat lorem. Aliquam turpis orci, mollis sed sapien et, auctor viverra tellus. Morbi iaculis ultrices orci quis ullamcorper.</p>
            </div>
        </>
    )
}

export default Introduction