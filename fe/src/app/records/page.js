import { LeftLayout } from "@/components/LeftLayout";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { House } from "lucide-react";
import { Utensils } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Records = () => {
  return (
    <div className="bg-[#F3F4F6]">
      <div className="container">
        <div className="flex gap-6 py-6">
          <LeftLayout />
          <div className="flex-1 border border-gray-600 h-screen py-6 flex flex-col gap-5">
            {/* Select days */}
            <div className="flex justify-between">
              <div className=" flex gap-4 items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-[#E5E7EB] rounded-lg"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div> Last 30 days</div>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-[#E5E7EB] rounded-lg"
                >
                  <ChevronRight className="h-4 w-4 " />
                </Button>
              </div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Newest first" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Newest">Newest first</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* Select all checkbox */}
            <div className="flex w-full items-center justify-between px-4 border border-gray-100 h-12 rounded-lg bg-white">
              <div className=" flex gap-4 items-center">
                <Checkbox id="selectAll" className="w-6 h-6" />
                <label
                  htmlFor="selectAll"
                  className="text-l font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Select all
                </label>
              </div>
              {/* Total */}
              <div className="text-[#94A3B8] ">-5000$</div>
            </div>
            {/* today÷ */}
            <div className="font-bold">Today</div>
            <div className="flex w-full items-center justify-between px-4 border border-gray-100 h-14 rounded-lg bg-white">
              <div className=" flex gap-4 items-center">
                <Checkbox id="selectAll" className="w-6 h-6" />
                <div className="rounded-full bg-[#0166FF] w-10 h-10 flex justify-center items-center  m-auto">
                  <House color="white" />
                </div>
                <div>
                  {" "}
                  <label
                    htmlFor="selectAll"
                    className="text-l font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Rent
                  </label>
                  <p className="text-sm text-muted-foreground">date</p>
                </div>
              </div>
              {/* Total */}
              <div className="text-green-500 ">5000$</div>
            </div>
            {/* Yesterday */}
            <div className="font-bold">Yesterday</div>
            <div className="flex w-full items-center justify-between px-4 border border-gray-100 h-14 rounded-lg bg-white">
              <div className=" flex gap-4 items-center">
                <Checkbox id="selectAll" className="w-6 h-6" />
                <div className="rounded-full bg-[#FF4545] w-10 h-10 flex justify-center items-center  m-auto">
                  <Utensils color="white" />
                </div>
                <div>
                  {" "}
                  <label
                    htmlFor="selectAll"
                    className="text-l font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Food
                  </label>
                  <p className="text-sm text-muted-foreground">date</p>
                </div>
              </div>
              {/* Total */}
              <div className="text-[#FF4545] ">-5000$</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Records;
