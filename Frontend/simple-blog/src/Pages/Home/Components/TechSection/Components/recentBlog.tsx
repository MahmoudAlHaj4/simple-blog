

interface RecentBlogProps {
  image: string;
  date: string;
  title: string;
}

const RecentBlog = ({ image, date, title }: RecentBlogProps) => (
  <li className="flex items-center space-x-4">
    <img
      src={image}
      alt={title}
      className="w-12 h-12 object-cover rounded"
    />
    <div>
      <span className="block text-gray-400">{date}</span>
      <span>{title}</span>
    </div>
  </li>
);

export default RecentBlog;
