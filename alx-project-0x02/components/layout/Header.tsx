import Link from 'next/link';


const Header: React.FC = () => {
    return (
        <header className="h-12 w-full flex justify-center items-center border-b border-neutral-600">
            <nav>
                <ul className="flex justify-center gap-12 w-full">
                    <Link href="/home"><li>Home</li></Link>
                    <Link href="/about"><li>About</li></Link>
                    <Link href="/posts"><li>Posts</li></Link>
                </ul>
            </nav>
        </header>
    )
}


export default Header;