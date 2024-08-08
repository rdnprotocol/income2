"use client";

import { Divide } from "lucide-react";
import { Button } from "./ui/button";
import { GoPlus } from "react-icons/go";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Category } from "./Category";
import { AmountRange } from "./AmountRange";
import { IoMdArrowDropdown } from "react-icons/io";
import { cn } from "@/lib/utils";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React, { useState } from "react";
import { AddDialog } from "./AddDialog";

export const LeftLayout = () => {
  return (
    <div className=" flex flex-col border border-gray-600 h-screen w-[282px] py-6 px-6 gap-6">
      <div className="font-semibold text-[18px]">Records</div>

      <AddDialog />
      <Input type="text" placeholder="Search" className="rounded-3xl" />

      <RadioGroup defaultValue="">
        <div className="font-bold mb-4">Types</div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="All" id="All" />
          <Label htmlFor="All">All</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Income" id="Income" />
          <Label htmlFor="Income">Income</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Expense" id="Expense" />
          <Label htmlFor="Expense">Expense</Label>
        </div>
      </RadioGroup>
      <Category />
      <AmountRange />
    </div>
  );
};
