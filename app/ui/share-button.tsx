'use client'

import { ShareIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';

export default function ShareButton({ postId }: { postId: number }) {
  const base = 'http://localhost:3000/post/';

  return (
    <Button
      variant="ghost"
      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-green-500 hover:scale-110 transition-colors duration-200"
      onClick={() => {
        navigator.clipboard.writeText(base+postId)
          .then(() => toast.success('Copied to clipboard'));
      } }
    >
      <ShareIcon className="w-5" />
    </Button>
  );
}
