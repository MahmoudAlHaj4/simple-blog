

interface CategoryItemProps {
  image: string;
  category: string;
  description: string;
}

const CategoryItem = ({ image, category, description }: CategoryItemProps) => (
  <li className="flex items-center space-x-4">
    <img
      src={image}
      alt={category}
      className="w-12 h-12 object-cover rounded"
    />
    <div>
      <span className="block text-gray-400">{category}</span>
      <span>{description}</span>
    </div>
  </li>
);

export default CategoryItem;
