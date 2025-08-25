import style from './Header.module.css';

function Header() {
    return (
        <>
            <header className={style.header}>
                <div className={style.brand}>
                    <span className={style.dot} aria-hidden="true"></span>
                    <span className={style.title}>Components Practice</span>
                </div>
                <nav className={style.nav} aria-label="primary">
                    <a className={style.a} href="#features">Features</a>
                    <a className={style.a} href="#gallery">Gallery</a>
                    <a className={style.a} href="#about">About</a>
                </nav>
            </header >
        </>
    )
}

export default Header;