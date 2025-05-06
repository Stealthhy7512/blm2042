'use client'

import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// TODO: Add `isFollowing` as a parameter if backend supplies isFollowing while fetching posts.
export default function FollowButton({ username }: { username: string }) {
  const owner_username = username;

  const [isFollowing, setIsFollowing] = useState(false);

  function handleClick() {
    setIsFollowing(!isFollowing);

    if (isFollowing) {
      fetch(`http://localhost:8080/user/${owner_username}/follow`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({owner_username}),
      });
    } else {
      fetch(`http://localhost:8080/user/${owner_username}/unfollow`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({owner_username}),
      });
    }
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
