
import { sendRequest } from '../Core/tools/sendRequest';
import { RequestMethod } from '../Core/enums/requestMethods';



export const authService = {
  login: async (email: string, password: string): Promise<{ token: string }> => {
    try {
      const response = await sendRequest<{ data: { token: string }; message: string }>({
        method: RequestMethod.POST,
        route: '/login',  
        body: { email, password },
      });
      console.log(response)

      if (response && response.data && response.data.token) {
        return { token: response.data.token }; 
      } else {
        throw new Error('Token not found in response');
      }

    } catch (error: any) {
      console.error('Error in login:', error);
      throw error; 
    }
  },

  Register: async(first_name: string , last_name: string , email: string , password: string): Promise<{message: string}> =>{
      try {
        const response = await sendRequest<{data: {token: string}; message: string} >({
          method: RequestMethod.POST,
          route: '/register',
          body: {first_name, last_name , email , password}
        })
        console.log(response);
        return { message: response.message };
      } catch (error: any) {
        console.error('Error in login:', error);
        throw error; 
      }
  }
};

