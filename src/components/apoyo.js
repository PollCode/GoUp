<nav className={`navbar navbar-expand ${scrolled ? 'bg-nav-scrolled ' : 'bg-nav-unscrolled' }`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#home">
                        {scrolled && <img src={logo} alt="Logo" className="navbar-logo" />}
                    </a>
                    <div className="navbar" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#option1">Opción 1</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#option2">Opción 2</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#option3">Opción 3</a>
                            </li>
                            {scrolled && (
                                <li className="nav-item">
                                    <a className="nav-link" href="#whatsapp">WhatsApp</a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>