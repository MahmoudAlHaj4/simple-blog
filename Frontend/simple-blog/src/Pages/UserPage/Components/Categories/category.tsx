import { useCategoryContext } from "../../../../Context/categoryContext";
  
  const Category = () => {
     const { categories } = useCategoryContext();
     if (!categories) {
        return <p>Loading categories...</p>;
      }
    return (

        <ul className='text-white'>
        {categories.map((category) => (
        <div key={category.id}>
        <h3>{category.name}</h3>
        </div>
    ))}
        </ul>
    );
  };
  
  export default Category;
  