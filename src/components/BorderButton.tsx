"use client";
import React from "react";
import { Button } from "./ui/moving-border";

export function BorderButton() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-gray-800"
      >
        Explore Services
      </Button>
    </div>
  );
}
