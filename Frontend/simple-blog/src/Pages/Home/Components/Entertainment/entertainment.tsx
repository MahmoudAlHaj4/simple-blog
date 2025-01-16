import BlogCard from "./Components/blogcard"
import Image1 from "../../../../Assets/netflix.jpg";
import Image2 from "../../../../Assets/st-plat.png";
import Image3 from "../../../../Assets/socail.jpg";

const EntertainmentSection = () => {
  const blogs = [
    {
      image: Image1,
      title: "Top 10 Movies of 2024: What's Worth Watching?",
      category: "Entertainment",
      date: "October 2024",
    },
    {
      image: Image2,
      title: "Streaming Platforms: What's Trending in 2024?",
      category: "Entertainment",
      date: "October 2024",
    },
    {
      image: Image3,
      title: "Social Media: The Biggest Viral Trends of 2024",
      category: "Entertainment",
      date: "October 2024",
    },
  ];

  return (
    <div className="Entertainment-container text-white w-full min-h-[400px]">
      <div className="title w-5/6 h-14">
        <h1 className="font-bold text-3xl p-4">Entertainment</h1>
      </div>
      <div className="blog-section w-full min-h-[350px] flex flex-wrap justify-around items-center">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            image={blog.image}
            title={blog.title}
            category={blog.category}
            date={blog.date}
          />
        ))}
      </div>
    </div>
  );
};

export default EntertainmentSection;
