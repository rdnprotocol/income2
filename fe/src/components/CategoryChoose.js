import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { AddCategory } from "./AddCategory";
import axios from "axios";
import { useState, useEffect } from "react";

export const CategoryChoose = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/categories/");
        if (Array.isArray(response.data)) {
          setCategories(response.data); // Correctly set categories
          setSelectedCategory(response.data[0] || null);
        } else {
          console.error("Expected array but got", response.data);
        }
      } catch (error) {
        console.error("Error fetching accounts:", error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <Select
        id="select"
        value={categories.Category_name}
        onValueChange={setSelectedCategory}
      >
        <Label htmlFor="select" className="text-left text-sm font-normal">
          Category
        </Label>
        <SelectTrigger className="w-full">
          <SelectValue
            value={selectedCategory ? selectedCategory.Category_name : ""}
            placeholder="Select a category"
          />
        </SelectTrigger>
        <SelectContent>
          <AddCategory />
          {categories.map((item, index) => (
            <SelectItem className="text-cyan-800" key={index} value={item.id}>
              {item.Category_name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
