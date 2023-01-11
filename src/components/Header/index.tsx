import "./styles.scss";

export function Header() {
    return (
        <header>
            <h3>
                <a href="#">Pinterest</a>
            </h3>

            <nav>
                <ul>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                    <li>
                        <a href="#">Negocios</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <div className="buttons">
                        <button className="login">
                            Log in
                        </button>
                        <button className="signup">
                            Sign up
                        </button>
                    </div>
                </ul>
            </nav>
        </header>
    )
};