'use client'

import { Button } from "@/components/ui/button";
import { MinusCircle } from "lucide-react";

export default function BlockButton() {
  function handleClick() {
    // Block işlemine yönelik mantık (henüz implement edilmedi)
  }

  return (
    <Button
      variant="outline"
      onClick={handleClick}
      className="ml-1 p-2 border-2 rounded-md text-red-600 border-red-600 hover:bg-red-100 hover:text-red-700 transition-all duration-200 ease-in-out"
    >
      <MinusCircle className="w-5 text-red-600 hover:text-red-700" />
    </Button>
  );
}
