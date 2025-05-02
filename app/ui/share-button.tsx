'use client'

import { ShareIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";

export default function ShareButon() {
  return (
    // TODO: Copy link that routes to the post and show a toast message
    <Button
      variant="ghost"
      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-green-500 transition-colors duration-200"
    >
      <ShareIcon className="w-5" />
    </Button>
  );
}
