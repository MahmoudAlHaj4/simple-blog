
interface CardProps {
    image: string,
    title: string,
    description:string,
    date: string
}

const Card = ({image , title , description , date}: CardProps) =>{
    return (
            <div className="flex flex-col sm:flex-row p-4 rounded-lg shadow-lg">
              <img
                src={image}
                alt={title}
                className="w-full sm:w-72 h-56 object-cover rounded-md"
              />
              <div className="flex flex-col gap-4 ml-4 sm:mt-0 sm:ml-4">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-1 sm:mb-0 sm:mt-2">{title}</h2>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="bg-yellow-400 text-black px-2 py-1 text-xs font-semibold rounded">
                    Mystery
                  </span>
                  <span className="text-sm text-gray-400">{date}</span>
                </div>
                <p className="text-base sm:text-lg font-light text-gray-400 leading-relaxed mt-2">
                  {description}
                </p>
              </div>
            </div>
    )
}

export default Card