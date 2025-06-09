import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <p className={styles.logo}>Zenivet</p>
            <p>Guest</p>
            <p>Menu</p>
        </header>
    )
}

export default Header;