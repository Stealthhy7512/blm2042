'use client'

import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function FollowButton() {
  const [isFollowing, setIsFollowing] = useState(false);

  function handleClick() {
    setIsFollowing(!isFollowing); // Takip etme durumunu değiştir
  }

  return (
    <Button
      variant="outline"
      onClick={handleClick}
      className={`flex items-center gap-2 text-sm rounded-lg p-2 transition-colors duration-200 
        ${isFollowing ? 'text-blue-600 border-blue-600' : 'text-gray-700 border-gray-400'} 
        hover:border-blue-600 hover:text-blue-600`}
    >
      {isFollowing ? (
        <>
          <CheckCircleIcon className="w-4" /> Following
        </>
      ) : (
        <>Follow</>
      )}
    </Button>
  );
}
