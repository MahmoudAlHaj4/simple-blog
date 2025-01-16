import { sendRequest } from '../Core/tools/sendRequest';
import { RequestMethod } from '../Core/enums/requestMethods';

type Category = {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
  };

export const CategoryService = {
  addCategory: async (name: string): Promise<{ message: string }> => {
    try {
      const response = await sendRequest<{ message: string }>({
        method: RequestMethod.POST,
        route: '/categories/create',
        body: { name }, 
      });
      console.log(response);
      return { message: response.message };
    } catch (error: any) {
      console.error('Error in creating category:', error);
      throw error;
    }
  },

  getCategories: async (): Promise<{categories: Category[]}>=> {
    try {
      const response = await sendRequest<{ categories: Category[] }>({
        method: RequestMethod.GET,
        route: '/categories',
        
      });
      console.log("the categories is: ",response);
      return response;
    } catch (error: any) {
      console.error('Error while getting categories:', error);
      throw error;
    }
  },
};
