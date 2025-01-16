import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu = ({ isOpen, toggleMenu }: MobileMenuProps) => {
  return (
    <div>
      <div onClick={toggleMenu} className='block md:hidden'>
        {isOpen ? (
          <CloseIcon className="text-white" style={{ fontSize: 30 }} />
        ) : (
          <MenuIcon className='text-white' style={{ fontSize: 30 }} />
        )}
      </div>
      <div
        className={isOpen ? 'fixed left-0 top-0 w-[60%] border-r h-full bg-gray-600 ease-in-out duration-300' : 'fixed left-[-100%]'}
      >
        <h1 className="text-4xl font-bold ml-4 pt-2">Simple Blog</h1>
        <ul className='p-4'>
          <li className="p-4 text-xl border-b text-yellow-400">Home</li>
          <li className="p-4 text-xl border-b">Tech</li>
          <li className="p-4 text-xl border-b">Mystery</li>
          <li className="p-4 text-xl border-b">Entertainment</li>
          <li className="p-4 text-xl border-b">Fitness</li>
          <li className="p-4 text-xl border-b">Get Started</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
