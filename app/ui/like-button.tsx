'use client'

import {HeartIcon} from "@heroicons/react/24/solid";
import { useState } from "react";
import { Toggle } from "@/components/ui/toggle"

export default function LikeButton({likes}: {likes: number}) {
  const [likeCount, setLikeCount] = useState(likes);

  function handleClick(pressed: boolean) {
    setLikeCount(pressed ? likeCount + 1 : likeCount - 1);
  }
  return (
      <Toggle className="text-base text-muted-foreground flex gap-1" onPressedChange={handleClick} defaultPressed={true}>
        <HeartIcon className="w-5"/> {likeCount}
      </Toggle>
  );
}
// TODO update database like count
// FIXME: handle `defaultPressed` from data
