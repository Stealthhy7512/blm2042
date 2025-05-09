'use client'

import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

// TODO: Add `isFollowing` as a parameter if backend supplies isFollowing while fetching posts.
export default function FollowButton({ username, isFollow }: { username: string, isFollow: boolean }) {
  const owner_username = username;

  const [isFollowing, setIsFollowing] = useState(isFollow);

  useEffect(() => {
    if (isFollowing) {
      fetch(`/api/user/${owner_username}/follow`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({owner_username}),
      });
    } else {
      fetch(`/api/user/${owner_username}/unfollow`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({owner_username}),
      });
    }
  }, [isFollowing, owner_username]);

  function handleClick() {
    setIsFollowing(prev => !prev);
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
