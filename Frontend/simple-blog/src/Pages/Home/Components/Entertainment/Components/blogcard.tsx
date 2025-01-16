

interface BlogCardProps {
  image: string;
  title: string;
  category: string;
  date: string;
}

const BlogCard = ({ image, title, category, date }: BlogCardProps) => {
  return (
    <div className="blog w-full sm:w-[45%] md:w-[30%] lg:w-[400px] mb-6 p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-auto object-cover rounded-md"
      />
      <h1 className="text-xl font-bold mt-4 mb-4">{title}</h1>
      <div className="flex flex-col gap-4 ml-4">
        <div className="flex items-center space-x-4 mt-2">
          <span className="bg-yellow-400 text-black px-2 py-1 text-xs font-semibold rounded">
            {category}
          </span>
          <span className="text-sm text-gray-400">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
