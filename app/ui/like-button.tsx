'use client'

import { HeartIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Toggle } from "@/components/ui/toggle";

export default function LikeButton({ likes }: { likes: number }) {
  const [likeCount, setLikeCount] = useState(likes);
  const [pressed, setPressed] = useState(false); // Beğenme durumu

  // Butona tıklanma işlevi
  function handleClick(pressed: boolean) {
    setPressed(pressed);
    setLikeCount(pressed ? likeCount + 1 : likeCount - 1); // Beğeni sayısını güncelle
  }

  return (
    <Toggle
      className={`text-base flex gap-1 items-center transition-all duration-300 ease-in-out 
        ${pressed ? 'text-red-500 scale-110' : 'text-muted-foreground'} 
        hover:text-red-600`}
      onPressedChange={handleClick}
      pressed={pressed}
    >
      <HeartIcon className="w-5 h-5" />
      <span>{likeCount}</span>
    </Toggle>
  );
}
