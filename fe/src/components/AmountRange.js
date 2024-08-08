"use client";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";

import { useState } from "react";
export const AmountRange = () => {
  const [values, setValue] = useState([0, 10000]);
  return (
    <>
      <div className="font-bold">Amount Range</div>
      <div className="flex justify-between gap-6">
        <Input
          type="number"
          placeholder={values[0]}
          onChange={(e) => setValue([e.target.value, values[1]])}
        />
        <Input
          type="number"
          placeholder={values[1]}
          onChange={(e) => setValue([e.target.value, values[1]])}
        />
      </div>
      <Slider
        defaultValue={[0, 10000]}
        value={values}
        onValueChange={(newvalue) => setValue(newvalue)}
        max={10000}
        min={0}
        step={1000}
      />
    </>
  );
};
