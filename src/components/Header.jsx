import styles from './Header.module.css'
import igniteLogo from '/src/images/love2.png'

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={igniteLogo} alt="logotipo"/><br />
                    <strong className={styles.red}>Love</strong>
                    <strong className={styles.br}>B</strong><strong className={styles.br2}>R</strong>
            </div>
        </header>
    )
}