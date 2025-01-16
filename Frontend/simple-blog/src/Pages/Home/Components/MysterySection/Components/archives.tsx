import ArchiveItem from "./archiveItem"
import Image1 from '../../../../../Assets/dark-image.webp'
import Image2 from '../../../../../Assets/socail.jpg'
import Image3 from '../../../../../Assets/Image2.png'
import Image4 from '../../../../../Assets/dark.webp'


const Archives = ()=>{
    return (
        <div>
      <h3 className="text-lg font-semibold mb-8">Archives</h3>
      <ul className="space-y-6 text-sm text-gray-300">
        <ArchiveItem
          image={Image1}
          date="November 2024"
          description="In a world where truth is often murky and perceptions are clouded..."
        />
        <ArchiveItem
          image={Image2}
          date="November 2024"
          description="In a world where truth is often murky and perceptions are clouded..."
        />
        <ArchiveItem
          image={Image3}
          date="November 2024"
          description="In a world where truth is often murky and perceptions are clouded..."
        />
        <ArchiveItem
          image={Image4}
          date="November 2024"
          description="In a world where truth is often murky and perceptions are clouded..."
        />
      </ul>
    </div>
    )
}

export default Archives