import Card from './Components/cards';
import RecentComments from './Components/recentComments';
import Archives from './Components/archives';
import Image1 from '../../../../Assets/bo club.jpg';
import Image2 from '../../../../Assets/illuminati.jpg';
import Image3 from '../../../../Assets/Feature-Image.webp'

const MysterySection = () => {
  return (
    <div className="text-white p-8 min-h-screen">
      <div className="flex flex-col lg:flex-row space-x-8">
        <div className="flex-1 space-y-6">
          <Card
            image={Image1}
            title="The Most Secretive Club In America: Bohemian Grove"
            date="October 2024"
            description="In a world where truth is often murky and perceptions are clouded, the phrase 'Why Would A Dead Girl Lie?' challenges..."
          />
          <Card
            image={Image2}
            title="Unveiling the Illuminati: Secrets of the Global Elite"
            date="October 2024"
            description="In a world where truth is often murky and perceptions are clouded, the phrase 'Why Would A Dead Girl Lie?' challenges..."
          />
          <Card
            image={Image3}
            title="Discover More About The Freemasons"
            date="October 2024"
            description="In a world where truth is often murky and perceptions are clouded, the phrase 'Why Would A Dead Girl Lie?' challenges..."
          />
        </div>

        <div className="w-full md:w-1/3 space-y-8">
          <RecentComments />
          <Archives />
        </div>
      </div>
    </div>
  );
};

export default MysterySection;
