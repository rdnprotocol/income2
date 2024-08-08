"use client";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import Img, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useRef } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Category } from "./Category";
import axios from "axios";

const generateUniqueId = require("generate-unique-id");

const colors = ["red", "slite", "green", "yellow", "purple"];

export const AddCategory = ({ getData }) => {
  const inputRef = useRef();
  const [selectedValue, setSelectedValue] = useState("");
  const [open, setOpen] = useState(false);

  const createCategory = async () => {
    if (inputRef.current.value === "" || selectedValue === "") {
      return;
    } else {
      const CategoryInput = inputRef.current.value;
      const icon_name = selectedValue;
      const id = generateUniqueId({
        length: 4,
        useLetters: false,
      });

      const newCategory = {
        id: id,
        Category_name: CategoryInput,
        Category_icon: icon_name,
      };
      const response = await axios.post(
        "http://localhost:3001/categories/create",
        newCategory
      );
    }

    setOpen(false);
    // response = [...response, response.data];
  };

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="pl-8" variant="add">
          Add Category
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle className="border-b-2 py-6 flex">
            Add Category
          </DialogTitle>
        </DialogHeader>
        <div className="flex gap-4">
          <Select className="grid grid-cols-7" onValueChange={handleSelect}>
            <SelectTrigger className="w-14">
              <SelectValue value="home" />
            </SelectTrigger>
            <SelectContent>
              <div className="grid grid-cols-7 mb-10 border-b-2 pb-5">
                <SelectItem value="home">
                  <img src="/svg/home.svg" className="w-6 h-6" />
                </SelectItem>
                <SelectItem value="build">
                  {" "}
                  <img src="/svg/building.svg" className="w-6 h-6" />
                </SelectItem>
                <SelectItem value="heart">
                  <img src="/svg/heart.svg" className="w-6 h-6" />
                </SelectItem>
                <SelectItem value="meal">
                  <img src="/svg/meal.svg" className="w-6 h-6" />
                </SelectItem>
                <SelectItem value="medical">
                  <img src="/svg/medical.svg" className="w-6 h-6" />
                </SelectItem>
                <SelectItem value="medical">
                  <img src="/svg/medical.svg" className="w-6 h-6" />
                </SelectItem>
              </div>
              <div className="grid grid-cols-6">
                {colors.map((color, index) => {
                  return (
                    <div
                      key={index}
                      className={`rounded-full w-6 h-6 bg-${color}-600`}
                    ></div>
                  );
                })}
              </div>
            </SelectContent>
          </Select>
          <Input ref={inputRef} />
        </div>
        <Button onClick={createCategory} type="submit" className="bg-green-400">
          Add
        </Button>
      </DialogContent>
    </Dialog>
  );
};
