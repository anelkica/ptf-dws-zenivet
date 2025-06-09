import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import styles from "./BaseLayout.module.css"

function BaseLayout({children}) {
    return (
        <div className={`layout ${styles.layout}`}>
            <Header />
            <main className={`content ${styles.content}`}>
                {children}
            </main>
        </div>
    )
}

export default BaseLayout;

