'use client'

import {CheckCircleIcon} from "@heroicons/react/24/outline";
import {Toggle} from "@/components/ui/toggle";
import {Button} from "@/components/ui/button";

export default function FollowButton() {
  function handleClick() {

  }
  return (
    <Button variant='outline' onClick={handleClick} className='ml-80 flex flex-row text-muted-foreground gap-1.5 text-sm border-2 rounded-xl border-gray-600 p-1'>
      {/* TODO (following) ? (<CheckCircleIcon className='w-5'/> Following) : (<Button /> Follow) */}
      <CheckCircleIcon className='w-4'/> Following
    </Button>
  )
}