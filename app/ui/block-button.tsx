'use client'

import { Button } from "@/components/ui/button";
import { MinusCircle } from "lucide-react";
import { useState} from "react";

export default function BlockButton({ username }: { username: string }) {
  const owner_username = username;

  const [isBlocked, setIsBlocked] = useState(false);

  // FIXME: Blocked status should be fetched and initial state should be updated according to that.
  // useEffect(() => {
  //   fetch(`http://localhost:8080/user/`).then(async res => {
  //     const data = await res.json();
  //     if (res.ok) {
  //       setIsBlocked(data.isBlocked);
  //     }
  //   });
  // }, []);

  function handleClick() {
    setIsBlocked(!isBlocked);

    if (isBlocked) {
      fetch(`/api/user/${owner_username}/block`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({ owner_username }),
      });
    } else {
      fetch(`/api/user/${owner_username}/unblock`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({ owner_username }),
      });
    }
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
