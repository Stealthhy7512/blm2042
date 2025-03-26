'use client'

import {Button} from "@/components/ui/button";
import { MinusCircle } from "lucide-react";
export default function BlockButton() {
    function handleClick() {
  
    }
    return (
      <Button variant='outline' onClick={handleClick} className=
      'ml-1 hover:bg-red-100 border-2 rounded-xl bg-red-50 border-red-300 p-1'>
        {/* TODO Check Blocked */}
        <MinusCircle className='w-4 text-red-400'/> 
      </Button>
    )
  }