import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import TitleSection from './TitleSection';

const DescriptionSection = () => {
  return (
    <div className="description w-full md:w-1/2 h-full flex flex-col  md:block hidden ">
      <h1 className="text-xl flex items-center justify-center md:justify-start">
        <DonutSmallIcon />
        <span className="py-4 px-2">Elevate Your Journey Today</span>
      </h1>
      <div className='mt-auto'>
      <TitleSection 
      title="Unlimited Inspiration"
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Omnis molestiae qui sint voluptas, reiciendis sunt nemo minima inventore consectetur nisi?" />
     
      <TitleSection 
      title='Stay Informed'
      description='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Reiciendis tempore delectus porro? Neque ducimus aspernatur laborum dolorum ipsam repudiandae consequuntur'/>
      
      <TitleSection 
      title='Secure Membership'
      description='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Reiciendis tempore delectus porro? Neque ducimus aspernatur laborum dolorum ipsam repudiandae consequuntur'/>
      </div>
     
      
      <ul className="flex gap-2 text-[13px] items-end h-40 m-2 space-y-2 md:space-y-0 text-customGray">
        <li>Terms . </li>
        <li>Privacy . </li>
        <li>Docs . </li>
        <li>Helps </li>
      </ul>
  </div>
  );
};

export default DescriptionSection;
