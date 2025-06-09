import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={`${styles.section}`}>
                <h3>Kontakt</h3>
                <p>Telefon: +387 62 110 413</p>
                <p>Email: info@zenivet.ba</p>
            </section>
            <section className={`${styles.section} ${styles.center}`}>
                <p>© 2025 Zenivet. Sva prava zadržana.</p>
            </section>
            <section className={`${styles.section} ${styles.right}`}>
                <h3>Lokacija & Radno vrijeme</h3>
                <p>Adresa: Zije Dizdarevića 14, Zenica</p>
                <p>Pon - Pet: 08:00 - 18:00</p>
                <p>Subota: 09:00 - 14:00</p>
            </section>
        </footer>
    )
}

export default Footer;