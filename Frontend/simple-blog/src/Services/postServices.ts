import { sendRequest } from "../Core/tools/sendRequest";
import { RequestMethod } from "../Core/enums/requestMethods";
import { Post } from "../types/types";

export const PostService = {
  getPosts: async (): Promise<{ posts: Post[] }> => {
    try {
      const response = await sendRequest<{ posts: Post[] }>({
        method: RequestMethod.GET,
        route: "/posts", 
      });
      console.log("Fetched posts:", response.posts);
      return response;
    } catch (error: any) {
      console.error("Error while fetching posts:", error);
      throw error;
    }
  },

  addPost: async() =>{

  }
};
