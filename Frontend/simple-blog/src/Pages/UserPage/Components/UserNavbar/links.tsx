type NavLinkProps = {
    title:string
}

const NavLinks = ({title}: NavLinkProps)=>{
    return(
        <div>
            <ul>
                <li className="text-white text-sm hover:text-customYellow">{title}</li>
            </ul>
        </div>
    )
}

export default NavLinks;