
interface NavLinkItemProps {
    title: string,
    isActive:boolean,
}

const NavLinkItem: React.FC<NavLinkItemProps> = ({title , isActive}) =>{
    return (
        <li className={`p-4 text-xl  cursor-pointer ${isActive ? 'text-yellow-400' : ''}`}>{title}</li>
      );
    
}

export default NavLinkItem