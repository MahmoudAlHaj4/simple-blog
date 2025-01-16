import { useAuthContext } from "../Context/authContext";
import { PostService } from "../Services/postServices";
import { useState , useEffect} from "react";

interface Post {
    id: number;
    title: string;
    content: string;
    image: string;
    user_id: number;
    category_id: number;
    created_at: string;
    updated_at: string;
  }



export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await PostService.getPosts();
        setPosts(data.posts);
      } catch (err) {
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };

}
