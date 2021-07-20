const Header = () => (
    <header className="main-header">
        <div className="ed-grid s-grid-5 lg-grid-4">
            <div className="s-cols-4 lg-cols-1 s-cross-center">
                <a href="/"><img className="main-logo" src="https://ux.ed.team/img/edteam-ux.svg" alt="hentai"/></a>
            </div>
            <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
            <nav className="main-menu" id="main-menu">
                <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/pagina1">pagina 1</a></li>
                <li><a href="/pagina2">pagina 2</a></li>
                </ul>
            </nav>
            <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
            </div>
        </div>
    </header>
)
export default Header