import {ChatBubbleLeftRightIcon} from "@heroicons/react/24/solid";
import {Toggle} from "@/components/ui/toggle";
import {Button} from "@/components/ui/button";

export default function CommentButton({comments}: {comments: number}) {
  return (
  <Button variant='ghost' className="text-base text-muted-foreground flex gap-1">
    <ChatBubbleLeftRightIcon className="w-5" /> {comments}
  </Button>
  );
}