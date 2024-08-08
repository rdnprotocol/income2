import { MdRemoveRedEye } from "react-icons/md";
import { MdOutlineArrowRight } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { AddCategory } from "./AddCategory";
import { useEffect, useState } from "react";
import axios from "axios";

export const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/categories/");
        if (Array.isArray(response.data)) {
          setCategories(...categories, response.data);
        } else {
          console.error("Expected array but got", response.data);
        }
      } catch (error) {
        console.error("Error fetching accounts:", error);
      }
    };
    getData();
  }, []);

  // console.log("categores = ", categories);

  // const handleChange = (newValue) => {
  //   setValue(newValue);

  return (
    <>
      <div className="flex justify-between">
        <div className="font-bold">Category</div>
        <div className="text-gray-300 font-normal">Clear</div>
      </div>
      {/* Category */}
      <div className="flex  items-center justify-between">
        <div className="flex flex-col items-center gap-2 ">
          {categories.map((item, index) => (
            <div
              className="text-cyan-800 flex justify-between w-[250px] border-2"
              key={index}
            >
              <div>{item.Category_name} </div>
              <MdOutlineArrowRight />
            </div>
          ))}
        </div>
      </div>
      {/* Add Category */}
      <div className="flex gap-2 items-center">
        {" "}
        <GoPlus size={30} color="#0166FF" />
        <AddCategory />
      </div>
    </>
  );
};
