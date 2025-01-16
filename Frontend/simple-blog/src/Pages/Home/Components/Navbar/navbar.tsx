import LogoTitle from "./components/logo";
import MobileMenu from "./components/MobileMenu";
import NavLinkItem from "./components/NavlinksItems";

import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = (): void => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 w-full text-white px-4 ">
         <LogoTitle />
         <div>
      <ul className="font-bold text-1xl hidden md:flex">
        <NavLinkItem title="Home" isActive={true} />
        <NavLinkItem title="Tech" isActive={false} />
        <NavLinkItem title="Mystery" isActive={false} />
        <NavLinkItem title="Entertainment" isActive={false} />
        <NavLinkItem title="Fitness" isActive={false} />
        <NavLinkItem title="Get Started" isActive={false} />
      </ul>
        <MobileMenu isOpen={nav} toggleMenu={handleNav} />
        </div>
    </div>
  );
};

export default Navbar;
