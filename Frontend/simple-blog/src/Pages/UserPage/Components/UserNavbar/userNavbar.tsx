import LogoTitle from "../../../Home/Components/Navbar/components/logo";
import NavLinks from "./links";
import SearchBar from "./search";
import ProfileIcon from "./profileIcon";

const UserNavbar = () => {
    return(
        <div className="text-white flex w-full h-24 bg-customBlack">
            <div className="logo-links w-1/2 h-full flex  gap-2  items-center pl-4">
                <LogoTitle/>
                <div className="links flex gap-4 pl-2 mt-4">
                    <NavLinks title="Home"/>
                    <NavLinks title="Blog"/>
                    <NavLinks title="About"/>
                    <NavLinks title="Contact"/>
                </div>
              
            </div>
            <div className="search-profile w-2/3  h-full flex items-center justify-end px-4 ">
                <SearchBar />
            </div>
            <div className="profile w-20 flex justify-center items-center" >
                <ProfileIcon />
            
            </div>
        </div>
    )
}

export default UserNavbar;