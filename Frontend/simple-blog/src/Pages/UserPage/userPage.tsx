import React, { useEffect } from 'react';
import UserNavbar from "./Components/UserNavbar/userNavbar";
import Category from "./Components/Categories/category";
import UserPost from "./Components/userPost";
import UserBlog from "./Components/UserBlog/userBlog";
import { useCategoryContext } from '../../Context/categoryContext';

const UserPage = () => {
  const { categories, getCategories } = useCategoryContext();



  return (
    <div className="main-container">
      <div><UserNavbar /></div>

      <div className="flex mt-4 gap-4">
        <div className="categories w-1/5 h-full bg-customBlack text-white rounded-md ml-2">
          <div className="categories-title text-center my-4 py-2">Categories</div>
          <div className="categories-list flex flex-col gap-4 ml-2 p-1">
          <Category />
          </div>
        </div>

        <div className="w-3/6 flex flex-col gap-4">
          <div className="create-blog w-full h-20 bg-customBlack text-white flex flex-col justify-center items-center rounded-md">
            <UserPost />
          </div>
          <div className="user-blogs flex flex-col gap-4">
            <UserBlog />
                        
              
          </div>
        </div>

        <div className="social w-96 h-full bg-customBlack text-white rounded-md mr-2 mb-2 flex flex-col gap-4">
          <div>
            <ul className="social-list flex gap-4 ml-2 p-1 h-20 justify-center items-center">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Tiktok</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
