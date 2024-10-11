import Link from 'next/link';
import styles from './Header.module.css';
// import Logo from './Logo';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                {/* <Logo src="/images/Logo texte.png" alt="Logo" width={170} height={70} /> */}
            </div>
            <nav className={styles.nav}>
                <Link href="/individualrecipe" className={styles.link}>Individual Recipe</Link>
                <Link href="/recipeapi" className={styles.link}>API RECIPES</Link>
                {/* <Link href="#anticiper" className={styles.link}></Link> */}
                <Link href="/recipes" className={styles.links}>See all recipes</Link>
            </nav>
        </header>
    );
}

export default Header;
