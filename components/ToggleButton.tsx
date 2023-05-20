"use client";
import { Toggle, ToggleItem } from "@tremor/react";
import { useState } from "react";

function ToggleButton() {
  const [value, setValue] = useState("1");
  return (
    <div>
      <Toggle defaultValue="1" value={value} onValueChange={setValue}>
        <ToggleItem value="1" text="Data"></ToggleItem>
        <ToggleItem value="2" text="Chart"></ToggleItem>
      </Toggle>
    </div>
  );
}

export default ToggleButton;
