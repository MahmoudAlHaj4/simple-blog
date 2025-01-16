import React, { createContext, useContext } from "react";
import { usePosts } from "../Hooks/usePosts";
import { Post } from "../types/types";



interface PostContextType {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

export const PostProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { posts, loading, error } = usePosts();

  return (
    <PostContext.Provider value={{ posts, loading, error }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePostContext must be used within a PostProvider");
  }
  return context;
};
