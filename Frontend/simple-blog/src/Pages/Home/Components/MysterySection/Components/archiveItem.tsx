
interface ArchiveItems {
    image: string
    date:string;
    description: string;
}

const ArchiveItem = ({image , date, description}: ArchiveItems) =>{
    return(
        <li className="flex items-center space-x-4">
        <img src={image} alt="Archive" className="w-12 h-12 object-cover rounded" />
        <div>
          <span className="block text-gray-400">{date}</span>
          <span>{description}</span>
        </div>
      </li>
    )
}

export default ArchiveItem