import styles from './Header.module.css';
import TransitionLink from '@/components/TransitionLink';
import Search from '@/components/Search';
// import Logo from './Logo';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Search />
                {/* <Logo src="/images/Logo texte.png" alt="Logo" width={170} height={70} /> */}
            </div>
            <nav className={styles.nav}>
                {/* <TransitionLink url="/individualrecipe" className={styles.link}>Individual Recipe</TransitionLink> */}
                <TransitionLink url="/" className={styles.link}>Accueil</TransitionLink>
                <TransitionLink url="/recipeapi" className={styles.link}>Voir les recettes</TransitionLink>
                {/* <TransitionLink url="#anticiper" className={styles.link}></TransitionLink> */}
                {/* <TransitionLink url="/recipes" className={styles.links}>See all recipes</TransitionLink> */}
            </nav>
        </header>
    );
}

export default Header;
