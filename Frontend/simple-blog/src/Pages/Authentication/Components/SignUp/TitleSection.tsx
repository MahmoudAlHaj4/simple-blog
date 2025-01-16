interface TitleSectionProps {
    title: string;
    description: string;

  }
  
  const TitleSection = ({ title, description }: TitleSectionProps) => {
    return (
      <div className="title1 m-4 flex flex-col">
        <h2 className="text-xl">{title}</h2>
        <p className="text-[13px] text-customGray">{description}</p>
      </div>
    );
  };
  
  export default TitleSection;
  