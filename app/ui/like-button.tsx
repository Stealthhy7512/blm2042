'use client'

import { HeartIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Toggle } from "@/components/ui/toggle";

export default function LikeButton({ likes, isLiked }: { likes: number, isLiked: boolean }) {
  const [likeCount, setLikeCount] = useState(likes);
  const [pressed, setPressed] = useState(isLiked); // Beğenme durumu

  // Butona tıklanma işlevi
  function handleClick(pressed: boolean) {
    setPressed(pressed);
    setLikeCount(pressed ? likeCount + 1 : likeCount - 1); // Beğeni sayısını güncelle
  }

  return (
    <Toggle
      className={`text-base flex gap-1 items-center transition-all duration-300 ease-in-out bg-transparent
      data-[state=on]:text-red-600 data-[state=off]:text-muted-foreground 
      data-[state=off]:hover:text-red-600 hover:scale-110`}
      onPressedChange={handleClick}
      pressed={pressed}
    >
      <HeartIcon className="w-5 h-5" />
      <span>{likeCount}</span>
    </Toggle>
  );
}
