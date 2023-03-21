import styles from './Sidebar.module.css'
import profileFoto from '../images/handslove.png'


export function sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img src={profileFoto} alt="picture" />

            <div className={styles.profile}>
                <strong>Name user</strong>
                <span>Florianópolis/sc</span>
            </div>

            <footer>
                <a href="">Editar perfil</a>
            </footer>
        </aside>
    )
}