import { usePostContext } from "../../../../Context/postsContext";

const UserBlog = () =>{

    const { posts } = usePostContext();
    return(
        <div className="user-blogs w-full min-h-20 bg-customBlack text-white flex flex-col rounded-md p-2 " > 
          {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="mb-4 bg-customBlack text-white p-4 rounded">
            {post.image && (
              <img
                src={`http://localhost:8000/${post.image}`}
                alt={post.title}
                className="mt-2 max-w-full rounded"
              />
            )}
            <h3 className="text-xl font-bold">{post.title}</h3>
            <p>{post.content}</p>  
          </div>
        ))
      )}
        </div>
    )
}

export default UserBlog;