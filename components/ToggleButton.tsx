"use client";
import { Toggle, ToggleItem } from "@tremor/react";
import { useState } from "react";

function ToggleButton() {
  const [value, setValue] = useState("Data");
  return (
    <div>
      <Toggle
        defaultValue="Data"
        onValueChange={(val) => {
          console.log(val);
          setValue(val);
        }}
      >
        <ToggleItem value="Data" text="Data"></ToggleItem>
        <ToggleItem value="Chart" text="Chart"></ToggleItem>
      </Toggle>
    </div>
  );
}

export default ToggleButton;
