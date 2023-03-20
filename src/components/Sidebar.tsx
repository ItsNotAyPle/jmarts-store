interface ISidebarItemProps {
    href:string;
    text:string;
}

const SideItem = (props:ISidebarItemProps) => {
    return (
        <li className="pl-6 px-2 hover:underline ">
            <a href={props.href}>{props.text}</a>
        </li>
    );
}

const Sidebar = () => {
    return (
        <div className="bg-cyan-500 w-fit h-full">
            <ul>
                <SideItem href="/" text="Home" />
                <SideItem href="/admin" text="Dashboard" />
                <SideItem href="/admin/products" text="Products" />
                <SideItem href="/admin/orders" text="Orders" />
            </ul>
        </div>
    );
}

export {Sidebar};