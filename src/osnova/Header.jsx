function Header({ handleClick }){
    return <header>
        <button onClick={() => handleClick('pole')}>
            <h2>Kosmetologoff</h2>
        </button>
        <nav>
            <ul>
                <li>
                    <button onClick={() => handleClick('uslugi')}>
                        услуги
                    </button>
                </li>
                <li>
                    <button onClick={() => handleClick('uhod')}>
                        уходовая косметика
                    </button>
                </li>
                <li>
                    <button onClick={() => handleClick('about_us')}>
                        записаться / О нас
                    </button>
                </li>
            </ul>
        </nav>
    </header>
    
}

export {Header}