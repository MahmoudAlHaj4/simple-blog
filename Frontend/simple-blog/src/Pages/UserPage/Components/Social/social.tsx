
interface SocailProps {
    title:string;
}


const Social = ({title}: SocailProps)=>{
    
    return (
        <div>
        <ul className="social-list flex gap-4  ml-2 p-1 h-20 justify-center items-center">
           <li>{title}</li>
           
       </ul>
   </div>
    )
}

export default Social