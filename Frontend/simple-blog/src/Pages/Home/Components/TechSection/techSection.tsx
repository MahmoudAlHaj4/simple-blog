
import Card from './Components/cards';
import SearchBar from './Components/SearchBlog';
import RecentBlog from './Components/recentBlog';
import CategoryItem from './Components/categoryItem';

import Image1 from '../../../../Assets/vr.png';
import Image2 from '../../../../Assets/ai.webp';
import Image3 from '../../../../Assets/laptop.webp';
import Image4 from '../../../../Assets/gadgets.webp';
import Image5 from '../../../../Assets/Image.png';
import Image6 from '../../../../Assets/Image2.png';
import Image7 from '../../../../Assets/bo club.jpg';
import Image8 from '../../../../Assets/netflix.jpg';
import Image9 from '../../../../Assets/dark.webp';

const TechSection = () => {
  const blogs = [
    { image: Image1, title: 'The Rise of AI', description: 'How AI changes life.', date: 'October 2024', category: 'Tech' },
    { image: Image2, title: 'Top Gadgets 2024', description: 'Best gadgets at MWC.', date: 'November 2024', category: 'Tech' },
    { image: Image3, title: 'Best Laptops', description: 'Top laptops of 2024.', date: 'December 2024', category: 'Tech' },
  ];

  const recentBlogs = [
    { image: Image5, date: 'December 2024', title: 'Why Would A Dead Girl Lie?' },
    { image: Image4, date: 'November 2024', title: 'Exploring conspiracies.' },
    { image: Image6, date: 'October 2024', title: 'The untold story.' },
    { image: Image7, date: 'September 2024', title: 'Unraveling secrets.' },
  ];

  const categories = [
    { image: Image8, category: 'Entertainment', description: 'Truth is murky...' },
    { image: Image9, category: 'Mystery', description: 'Secrets revealed...' },
    { image: Image2, category: 'Tech', description: 'Tech trends...' },
    { image: Image4, category: 'Fitness', description: 'Staying fit...' },
  ];

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
  };

  return (
    <div className="text-white p-8 min-h-screen">
      <div className="title w-5/6 h-14">
        <h1 className="font-bold text-3xl p-2">Tech</h1>
      </div>
      <div className="flex flex-col lg:flex-row space-x-8">
        <div className="flex-1 space-y-6">
          {blogs.map((blog, index) => (
            <Card
              key={index}
              image={blog.image}
              title={blog.title}
              description={blog.description}
              date={blog.date}
             
            />
          ))}
        </div>

        <div className="w-5/6 md:w-1/3 space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Search</h3>
            <SearchBar placeholder="Search blogs..." onSearch={handleSearch} />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Recent Blogs</h3>
            <ul className="space-y-6 text-sm text-gray-300">
              {recentBlogs.map((blog, index) => (
                <RecentBlog
                  key={index}
                  image={blog.image}
                  date={blog.date}
                  title={blog.title}
                />
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-8">Popular Categories</h3>
            <ul className="space-y-6 text-sm text-gray-300">
              {categories.map((category, index) => (
                <CategoryItem
                  key={index}
                  image={category.image}
                  category={category.category}
                  description={category.description}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSection;
