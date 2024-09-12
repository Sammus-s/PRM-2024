import './style.css';

function Header() {
    return(
        <header>
            <div className="container">
                <div className="toolbar">
                    <h6>Mater Play</h6>
                    <nav>
                        <ul>
                            <li><a href="#" className='active'>Todos</a></li>
                            <li><a href="#" className='active'>Séries</a></li>
                            <li><a href="#" className='active'>Filmes</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;