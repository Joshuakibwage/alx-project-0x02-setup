import Link from 'next/link';


const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <ul>
                    <Link href="/home"><li>Home</li></Link>
                    <Link href="/about"><li>About</li></Link>
                </ul>
            </nav>
        </header>
    )
}


export default Header;