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
import { CategoryChoose } from "./CategoryChoose";

export const AddDialog = () => {
  const [date, setDate] = useState(new Date());
  <div>
    <div>fff</div>
  </div>;
  // <Dialog>
  //   <DialogTrigger asChild>
  //     <Button
  //       variant="outline"
  //       className="h-8 rounded-3xl bg-[#0166FF] w-full text-white"
  //     >
  //       {" "}
  //       <GoPlus size={20} />
  //       Add
  //     </Button>
  //   </DialogTrigger>
  //   <DialogContent className="sm:max-w-[792px]">
  //     <DialogHeader>
  //       <DialogTitle className="border-b-2 py-6 flex">Add Record</DialogTitle>
  //     </DialogHeader>
  //     <div className="flex gap-6">
  //       <div className="flex-1">
  //         <Tabs defaultValue="Expense" className="w-full">
  //           <TabsList className="w-full ">
  //             <TabsTrigger className="w-full" value="Expense">
  //               Expense
  //             </TabsTrigger>
  //             <TabsTrigger className="w-full " value="Income">
  //               Income
  //             </TabsTrigger>
  //           </TabsList>
  //           <TabsContent value="Expense" className="flex flex-col  gap-8">
  //             <Input
  //               id="Amount"
  //               type="number"
  //               defaultValue="Amount0"
  //               className="col-span-3"
  //               placeholder="₮ 0.000"
  //             />
  //             <CategoryChoose />
  //             <div className="flex  gap-4">
  //               <div className="flex flex-col gap-2">
  //                 {" "}
  //                 <Label
  //                   htmlFor="Date"
  //                   className="text-left text-sm font-normal"
  //                 >
  //                   date
  //                 </Label>
  //                 <Popover>
  //                   <PopoverTrigger asChild>
  //                     <Button
  //                       variant={"outline"}
  //                       className={cn(
  //                         "w-[180px] justify-start text-left font-normal",
  //                         !date && "text-muted-foreground"
  //                       )}
  //                     >
  //                       {date ? format(date, "PPP") : <span>Pick a date</span>}
  //                       <IoMdArrowDropdown className="ml-6 h-4 w-4" />
  //                     </Button>
  //                   </PopoverTrigger>
  //                   <PopoverContent>
  //                     <Calendar
  //                       mode="single"
  //                       selected={date}
  //                       onSelect={setDate}
  //                       initialFocus
  //                     />
  //                   </PopoverContent>
  //                 </Popover>
  //               </div>
  //               <div className="flex flex-col gap-2">
  //                 {" "}
  //                 <Label
  //                   htmlFor="Date"
  //                   className="text-left text-sm font-normal"
  //                 >
  //                   date
  //                 </Label>
  //                 <Popover>
  //                   <PopoverTrigger asChild>
  //                     <Button
  //                       variant={"outline"}
  //                       className={cn(
  //                         "w-[180px] justify-start text-left font-normal",
  //                         !date && "text-muted-foreground"
  //                       )}
  //                     >
  //                       {date ? format(date, "PPP") : <span>Pick a date</span>}
  //                       <IoMdArrowDropdown className="ml-6 h-4 w-4" />
  //                     </Button>
  //                   </PopoverTrigger>
  //                   <PopoverContent>
  //                     <Calendar
  //                       mode="single"
  //                       selected={date}
  //                       onSelect={setDate}
  //                       initialFocus
  //                     />
  //                   </PopoverContent>
  //                 </Popover>
  //               </div>
  //             </div>
  //           </TabsContent>
  //           <TabsContent value="Income" className="flex flex-col  gap-8">
  //             <Input
  //               id="Amount"
  //               type="number"
  //               defaultValue="Amount0"
  //               className="col-span-3"
  //               placeholder="₮ 0.000"
  //             />
  //             <CategoryChoose />
  //             <div className="flex  gap-4">
  //               <div className="flex flex-col gap-2">
  //                 {" "}
  //                 <Label
  //                   htmlFor="Date"
  //                   className="text-left text-sm font-normal"
  //                 >
  //                   date
  //                 </Label>
  //                 <Popover>
  //                   <PopoverTrigger asChild>
  //                     <Button
  //                       variant={"outline"}
  //                       className={cn(
  //                         "w-[180px] justify-start text-left font-normal",
  //                         !date && "text-muted-foreground"
  //                       )}
  //                     >
  //                       {date ? format(date, "PPP") : <span>Pick a date</span>}
  //                       <IoMdArrowDropdown className="ml-6 h-4 w-4" />
  //                     </Button>
  //                   </PopoverTrigger>
  //                   <PopoverContent>
  //                     <Calendar
  //                       mode="single"
  //                       selected={date}
  //                       onSelect={setDate}
  //                       initialFocus
  //                     />
  //                   </PopoverContent>
  //                 </Popover>
  //               </div>
  //               <div className="flex flex-col gap-2">
  //                 {" "}
  //                 <Label
  //                   htmlFor="Date"
  //                   className="text-left text-sm font-normal"
  //                 >
  //                   date
  //                 </Label>
  //                 <Popover>
  //                   <PopoverTrigger asChild>
  //                     <Button
  //                       variant={"outline"}
  //                       className={cn(
  //                         "w-[180px] justify-start text-left font-normal",
  //                         !date && "text-muted-foreground"
  //                       )}
  //                     >
  //                       {date ? format(date, "PPP") : <span>Pick a date</span>}
  //                       <IoMdArrowDropdown className="ml-6 h-4 w-4" />
  //                     </Button>
  //                   </PopoverTrigger>
  //                   <PopoverContent>
  //                     <Calendar
  //                       mode="single"
  //                       //tsag awah
  //                       selected={date.getHours()}
  //                       onSelect={setDate}
  //                       initialFocus
  //                     />
  //                   </PopoverContent>
  //                 </Popover>
  //               </div>
  //             </div>
  //           </TabsContent>
  //         </Tabs>

  //         <Button
  //           type="submit"
  //           className="h-8 rounded-3xl bg-[#0166FF] w-full text-white mt-8"
  //         >
  //           Add Record
  //         </Button>
  //       </div>
  //       <div className="flex-1 flex flex-col gap-6">
  //         <div>
  //           <Label htmlFor="Payee" className="text-left text-sm font-normal">
  //             Payee
  //           </Label>
  //           <Select className="mt-8" id="Payee">
  //             <SelectTrigger className="w-full">
  //               <SelectValue placeholder="Write here" />
  //             </SelectTrigger>
  //             <SelectContent>
  //               <SelectItem value="light">Light</SelectItem>
  //               <SelectItem value="dark">Dark</SelectItem>
  //               <SelectItem value="system">System</SelectItem>
  //             </SelectContent>
  //           </Select>
  //         </div>

  //         <Textarea className="h-full" />
  //       </div>
  //     </div>
  //   </DialogContent>
  // </Dialog>;
};
