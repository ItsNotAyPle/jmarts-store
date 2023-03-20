interface INavItemProps {
    href:string;
    text:string;
}

const NavItem = (props:INavItemProps) => {
    return (
        <li className="px-2 hover:underline ">
            <a href={props.href}>{props.text}</a>
        </li>
    );
}

export const Navbar = () => {
    return (
        <nav className="py-5">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="/">
                    <h1 className="text-4xl font-bold">Hustler</h1>
                </a>
                <ul className="flex flex-row items-center">
                    <NavItem href="/products" text="Products" />
                    <NavItem href="/about" text="About" />
                    <NavItem href="/contact" text="Contact" />
                </ul>
            </div>
        </nav>
    );
}