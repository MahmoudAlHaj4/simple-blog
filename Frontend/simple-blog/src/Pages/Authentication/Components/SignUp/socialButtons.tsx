const SocialButtons = () => {
    return (
      <div className="social-buttons flex justify-center items-center gap-4">
        <button className="w-[150px] h-[40px] py-[9px] rounded-[7.48px] bg-customGray text-sm hover:bg-customHover transition duration-200">
          Google
        </button>
        <button className="w-[150px] h-[40px] py-[9px] rounded-[7.48px] bg-customGray text-sm hover:bg-customHover transition duration-200">
          GitHub
        </button>
        <button className="w-[150px] h-[40px] py-[9px] rounded-[7.48px] bg-customGray text-sm hover:bg-customHover transition duration-200">
          GitLab
        </button>
      </div>
    );
  };
  
  export default SocialButtons;
  