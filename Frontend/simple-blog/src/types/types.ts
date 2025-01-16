 export interface LoginParam  {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    token_type: string;
    expires_in: number;
  }


  export interface Post {
    id: number;
    title: string;
    content: string;
    image: string;
    user_id: number;
    category_id: number;
    created_at: string;
    updated_at: string;
  }
  